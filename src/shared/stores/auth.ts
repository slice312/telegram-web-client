import {atom, useRecoilState} from "recoil";
import {EventSubscription} from "fbemitter";
import TdClient, {TdObject} from "tdweb";
import {getRecoil, setRecoil} from "recoil-nexus";
import {tdLibController} from "@/shared/tdlib";

import {TdAuthState} from "./tdStates";
import {TdMethods} from "./tdMethods";


interface AuthState {
    type: string;
    isLoginByPhoneNumber: boolean;
    isWaitConfirmationCode: boolean;
    qrCodeLink: string;
    isAuthenticated: boolean;
}


export const authAtom = atom<AuthState>({
    key: "auth-atom2",
    default: {
        type: "",
        isLoginByPhoneNumber: false,
        isWaitConfirmationCode: false,
        qrCodeLink: "",
        isAuthenticated: false
    }
});


interface AsState {
    "@type": string;
    link?: string;
}


// import {tdLibController} from "@/shared/tdlib";


class AuthStore {

    constructor() {
    }


    public async onUpdate(update: TdObject) {
        const type = update["@type"];
        if (type !== "updateAuthorizationState")
            return

        // console.log("AuthStore", update);

        const value = getRecoil(authAtom);

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
                if (!value.isLoginByPhoneNumber) {
                    await tdLibController.send({
                        "@type": TdMethods.requestQrCodeAuthentication,
                        other_user_ids: []
                    });
                }
                break;
            case TdAuthState.authorizationStateWaitCode:
                setRecoil(authAtom, prev => ({
                    ...prev,
                    isWaitConfirmationCode: true,
                }));
                break;
            case TdAuthState.authorizationStateWaitOtherDeviceConfirmation:
                setRecoil(authAtom, {
                    ...value,
                    isLoginByPhoneNumber: false,
                    qrCodeLink: authState?.link || ""
                });
                break;
            case TdAuthState.authorizationStateReady:
                // TODO: тут че
                break;
            default:
        }

        console.log("AuthStore", update);
        // debugger
        // setRecoil(authAtom, {type: ""});

    }

    public async setToPhone() {
        setRecoil(authAtom, currVal => ({
            ...currVal,
            isLoginByPhoneNumber: true
        }));

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