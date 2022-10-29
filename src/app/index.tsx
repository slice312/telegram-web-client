import {useCallback, useEffect, useRef, useState} from "react";
import TdClient, {TdObject} from "tdweb";
import {QrCode} from "@/pages/Auth/QrCode";
import {Phone} from "@/pages/Auth/Phone/index.";

import {TdStates} from "@/constants";

import "./styles/index.css";



import {tdLibController} from "@/shared/tdlib";
import {useTdLib} from "@/shared/api";

// import tg_logo from "/assets/tg_logo.png"


export const App = () => {
    const {client, event, reloadClient} = useTdLib();


    const [isLogWithPhone, setIsLogWithPhone] = useState(false);

    console.log("RENDER HOME PAGE", event);

    useEffect(() => {
        const handleAuth = async () => {
            try {
                if (event?.["@type"] === "updateAuthorizationState") {
                    const authState = event["authorization_state"] as TdObject;
                    const type = authState["@type"];

                    /* TODO:
                        authorizationStateClosing
                         authorizationStateWaitCode
                          authorizationStateWaitPassword
                           authorizationStateWaitRegistration, and authorizationStateWaitTdlibParameters.
                    */
                    switch (type) {
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
                            await client?.send({
                                "@type": "checkDatabaseEncryptionKey"
                            });
                            console.log("checkDatabaseEncryptionKey SUCCESS");

                            break;
                        case "authorizationStateWaitPhoneNumber":
                            if (!isLogWithPhone) {
                                await client?.send({
                                    "@type": "requestQrCodeAuthentication",
                                    other_user_ids: []
                                });
                                console.log("SEND");
                            }
                            break;
                        case "authorizationStateWaitOtherDeviceConfirmation":
                            break;
                        case "authorizationStateReady":
                            // TODO: тут че
                            break;
                        default:
                            break;

                    }
                }
            } catch (err) {
                console.log(err);
                debugger;
            }
        };

        if (client && event?.authorization_state)
            void handleAuth();

    }, [client, event]);


    if (event && event["@type"] === "updateAuthorizationState") {
        const authState = event["authorization_state"] as TdObject;
        const type = authState["@type"];


        if (type === "authorizationStateWaitOtherDeviceConfirmation" && !isLogWithPhone) {
            return <QrCode
                /* @ts-ignore */
                link={event?.authorization_state?.link}
                onPhone={() => {
                    setIsLogWithPhone(true);
                }}/>;
        }
        if (type === TdStates.Auth.authorizationStateWaitPhoneNumber && isLogWithPhone)
            return <Phone event={event}/>;

    }

    return (
        <div>
            <h1>Lol Kek</h1>
            <button type="button" onClick={() => {
                client?.send({
                    "@type": "logOut"
                });
            }}>
                Log out
            </button>

            <button type="button" onClick={() => {
            }}>
                Log with phone number
            </button>
        </div>
    );
};