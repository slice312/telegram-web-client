import {TdObject} from "tdweb";
import {tdLibController} from "@/shared/tdlib";

import {TdAuthState} from "./tdStates";
import {TdMethods} from "./tdMethods";
import {store, slices} from "@/store";


const authSlice = slices.authSlice;


interface AsState {
    "@type": string;
    link?: string;
}


class AuthStore {
    constructor() {
    }


    public async onUpdate(update: TdObject) {
        const type = update["@type"];
        if (type !== "updateAuthorizationState")
            return;


        const auth = store.getState().auth;

        const authState = update.authorization_state as AsState;

        switch (authState["@type"]) {
            case TdAuthState.authorizationStateClosed:
                console.log("START DESTR");
                // reloadClient();
                // await client?.send({'@type': 'destroy'}); // TODO: нужно?
                break;
            case TdAuthState.authorizationStateWaitEncryptionKey:
                await tdLibController.send({
                    "@type": TdMethods.checkDatabaseEncryptionKey
                });
                break;
            case TdAuthState.authorizationStateWaitPhoneNumber:
                if (!auth.isLoginByPhoneNumber) {
                    await tdLibController.send({
                        "@type": TdMethods.requestQrCodeAuthentication,
                        other_user_ids: []
                    });
                }
                break;
            case TdAuthState.authorizationStateWaitCode:
                store.dispatch(authSlice.actions.waitConfirmationCode());
                break;
            case TdAuthState.authorizationStateWaitOtherDeviceConfirmation:
                store.dispatch(authSlice.actions.waitQrCodeConfirmation(authState?.link || ""));
                break;
            case TdAuthState.authorizationStateReady:
                // TODO: тут че
                break;
            default:
        }

        console.log("AuthStore", update);

    }

    public async setToPhone() {
        store.dispatch(authSlice.actions.waitPhone());
        await tdLibController.reloadClient();
    }

    public async authByPhone(phone: string) {
        return await tdLibController.send({
            "@type": TdMethods.setAuthenticationPhoneNumber,
            phone_number: phone
        });
    }
}

export const authStore = new AuthStore();