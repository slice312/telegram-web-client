import {useCallback, useEffect, useRef, useState} from "react";
import TdClient, {TdObject} from "tdweb";
import {QrCode} from "@/pages/Auth/QrCode";
import {Phone} from "@/pages/Auth/Phone/index.";


import {tdLibController} from "@/shared/tdlib";

import "./styles/index.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import {authAtom, authStore} from "@/shared/stores/auth";

import {useRecoilValue} from "recoil";
import {EventSubscription} from "fbemitter";
import styled from "@emotion/styled";
import {Paper, ThemeProvider, Typography} from "@mui/material";
import {lightTheme} from "@/themes/lightTheme";
import {darkTheme} from "@/themes/darkTheme";
import {ChatsBar} from "@/components/chatsBar/ChatsBar";

// import tg_logo from "/assets/tg_logo.png"


const ReadyComponent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 50px;
`;


export const App = () => {
    // const {client, event, reloadClient} = useTdLib();


    useEffect(() => {
        const subscriptions: EventSubscription[] = [];
        subscriptions.push(tdLibController.addListener("update", authStore.onUpdate));
        return () => {
            subscriptions.forEach(x => x.remove());
        };
    }, []);

    const authState = useRecoilValue(authAtom);

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


    // if (authState.isAuthenticated) {
    //     return (
    //         <ReadyComponent>
    //             <Typography>
    //                 Chats
    //             </Typography>
    //         </ReadyComponent>
    //     );
    // }
    //
    // if (authState.isLoginByPhoneNumber)
    //     return <Phone/>;
    // return <QrCode/>;

    const [darkMode, setDarkMode] = useState<boolean>(false);
    return (
        <div>
            {/*<h1>Lol Kek</h1>*/}
            {/*<button type="button" onClick={() => {*/}
            {/*    client?.send({*/}
            {/*        "@type": "logOut"*/}
            {/*    });*/}
            {/*}}>*/}
            {/*    Log out*/}
            {/*</button>*/}

            {/*<button type="button" onClick={() => {*/}
            {/*}}>*/}
            {/*    Log with phone number*/}
            {/*</button>*/}
            <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
                <Paper elevation={0} square>
                    <div style={{display: "flex"}}>
                        <ChatsBar darkMode={darkMode} setDarkMode={setDarkMode}/>
                    </div>
                </Paper>
            </ThemeProvider>

        </div>
    );
};