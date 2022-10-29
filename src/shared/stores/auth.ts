import {atom, useRecoilState} from "recoil";
import {EventSubscription} from "fbemitter";
import {TdObject} from "tdweb";
import {getRecoil, setRecoil} from "recoil-nexus";
import {tdLibController} from "@/shared/tdlib";

interface AuthState {
    type: string;
    isLoginByPhoneNumber: boolean;
    qrCodeLink: string;
}


export const authStoreAtom = atom<AuthState>({
    key: "auth-store",
    default: {
        type: "",
        isLoginByPhoneNumber: false,
        qrCodeLink: ""
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
            return;

        const authState = update.authorization_state as AsState;

        switch (authState["@type"]) {
            case "authorizationStateClosed":
                console.log("START DESTR");
                // reloadClient();
                // await client?.send({'@type': 'destroy'}); // TODO: нужно?
                console.log("DESTROYED");

                // window.location.reload(); // a kind of a 'hack' but it works...
                // console.log("-------------------------authorizationStateClosed -> destroy");
                break;
            case "authorizationStateWaitEncryptionKey":
                console.log("checkDatabaseEncryptionKey send");
                await tdLibController.send({
                    "@type": "checkDatabaseEncryptionKey"
                });
                console.log("checkDatabaseEncryptionKey SUCCESS");

                break;
            case "authorizationStateWaitPhoneNumber":
                await tdLibController.send({
                    "@type": "requestQrCodeAuthentication",
                    other_user_ids: []
                });
                //     if (!isLogWithPhone) {
                //         await client?.send({

                //         });
                //         console.log("SEND");
                //     }
                break;
            case "authorizationStateWaitOtherDeviceConfirmation":
                const value = getRecoil(authStoreAtom);
                setRecoil(authStoreAtom, {
                    ...value,
                    isLoginByPhoneNumber: false,
                    qrCodeLink: authState?.link || ""
                });
                break;
            case "authorizationStateReady":
                // TODO: тут че
                break;
            default:
        }

        console.log("AuthStore", update);
        // debugger
        // setRecoil(authStoreAtom, {type: ""});

    }
}

export const authStore = new AuthStore();