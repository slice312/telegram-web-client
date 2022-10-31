import {useEffect} from "react";
import {QrCode} from "./qrCode/QrCode";
import {Phone} from "./phone/Phone";

import {useAppSelector} from "@/store";


import {tdLibController} from "@/shared/tdlib";

import {authStore} from "@/td/auth";

import {EventSubscription} from "fbemitter";
import styled from "@emotion/styled";
import {Typography} from "@mui/material";


const ReadyComponent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 50px;
`;


export const AuthForm = () => {
    useEffect(() => {
        const subscriptions: EventSubscription[] = [];
        subscriptions.push(tdLibController.addListener("update", authStore.onUpdate));
        return () => {
            subscriptions.forEach(x => x.remove());
        };
    }, []);


    const authState = useAppSelector(state => state.auth);

    // const [isLogWithPhone, setIsLogWithPhone] = useState(false);
    //
    // console.log("RENDER HOME PAGE", event);
    //
    // useEffect(() => {
    //     const handleAuth = async () => {
    //         try {
    //             if (event?.["@type"] === "updateAuthorizationState") {
    //                 const authState = event["authorization_state"] as TdObject;
    //                 const type = authState["@type"];
    //
    //                 /* TODO:
    //                     authorizationStateClosing
    //                      authorizationStateWaitCode
    //                       authorizationStateWaitPassword
    //                        authorizationStateWaitRegistration, and authorizationStateWaitTdlibParameters.
    //                 */
    //                 switch (authState.type) {
    //                     case "authorizationStateClosed":
    //                         console.log("START DESTR");
    //                         // reloadClient();
    //                         // await client?.send({'@type': 'destroy'}); // TODO: нужно?
    //                         console.log("DESTROYED");
    //
    //                         // window.location.reload(); // a kind of a 'hack' but it works...
    //                         // console.log("-------------------------authorizationStateClosed -> destroy");
    //                         break;
    //                     case "authorizationStateWaitEncryptionKey":
    //                         console.log("checkDatabaseEncryptionKey send");
    //                         await client?.send({
    //                             "@type": "checkDatabaseEncryptionKey"
    //                         });
    //                         console.log("checkDatabaseEncryptionKey SUCCESS");
    //
    //                         break;
    //                     case "authorizationStateWaitPhoneNumber":
    //                         if (!isLogWithPhone) {
    //                             await client?.send({
    //                                 "@type": "requestQrCodeAuthentication",
    //                                 other_user_ids: []
    //                             });
    //                             console.log("SEND");
    //                         }
    //                         break;
    //                     case "authorizationStateWaitOtherDeviceConfirmation":
    //                         break;
    //                     case "authorizationStateReady":
    //                         // TODO: тут че
    //                         break;
    //                     default:
    //                         break;
    //
    //                 }
    //             }
    //         } catch (err) {
    //             console.log(err);
    //             debugger;
    //         }
    //     };
    //
    //     if (client && event?.authorization_state)
    //         void handleAuth();
    //
    // }, [client, event]);
    //
    //
    // if (event && event["@type"] === "updateAuthorizationState") {
    //     const authState = event["authorization_state"] as TdObject;
    //     const type = authState["@type"];
    //
    //
    //     if (type === "authorizationStateWaitOtherDeviceConfirmation" && !isLogWithPhone) {
    //         return <QrCode
    //             /* @ts-ignore */
    //             link={event?.authorization_state?.link}
    //             onPhone={() => {
    //                 setIsLogWithPhone(true);
    //             }}/>;
    //     }
    //     if (type === TdStates.Auth.authorizationStateWaitPhoneNumber && isLogWithPhone)
    //         return <Phone event={event}/>;
    //
    // }


    if (authState.isAuthenticated) {
        return (
            <ReadyComponent>
                <Typography>
                    Chats
                </Typography>
            </ReadyComponent>
        );
    }


    if (authState.isLoginByPhoneNumber)
        return <Phone/>;
    return <QrCode/>;


    return (
        <div>

        </div>
    );
};