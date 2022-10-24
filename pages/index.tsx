import type {NextPage} from 'next'
import styles from '../styles/Home.module.css'
import {useCallback, useEffect, useRef, useState} from "react";
import TdClient, {TdObject} from "tdweb"
import {QrCode} from "./Auth/QrCode";

// import tg_logo from "/assets/tg_logo.png"

export function QR(mydata) {
    let qrCode;
    if (typeof window !== "undefined") {           //Only do this on the client
        const QRCodeStyling = require("qr-code-styling");
        qrCode = new QRCodeStyling(mydata)
        return qrCode
    }
}


const Home: NextPage = () => {
    const [tdClient, setTdClient] = useState<TdClient>()
    const [event, setEvent] = useState<TdObject>();
    const [s, ss] = useState("ds");
    const qr = useRef();


    const [isLogWithPhone, setIsLogWithPhone] = useState(false);

    console.log("RENDER HOME PAGE", event);

    const onUpdate = useCallback(update => {
        // This is for debug, the amount of messages from the lib scares me...
        // console.log('***', JSON.stringify(update))
        // We care only of the auth states here
        if (update['@type'] === 'updateAuthorizationState') {
            setEvent(update)
        }

        if (
            update['@type'] === 'updateNewMessage' ||
            update['@type'] === 'updateDeleteMessages'
        ) {
            console.log("MESSAGES");
        }
    }, [])

    useEffect(() => {
        const handleAuth = async () => {
            try {
                if (event["@type"] === "updateAuthorizationState") {
                    const authState = event["authorization_state"] as TdObject;
                    const type = authState["@type"];

                    switch (type) {
                        case 'authorizationStateClosed':
                            await tdClient?.send({'@type': 'destroy'});
                            // window.location.reload(); // a kind of a 'hack' but it works...
                            break;
                        case "authorizationStateWaitEncryptionKey":
                            console.log("checkDatabaseEncryptionKey send");
                            await tdClient?.send({
                                '@type': 'checkDatabaseEncryptionKey'
                            })
                            console.log("checkDatabaseEncryptionKey SUCCESS");

                            break;
                        case 'authorizationStateWaitPhoneNumber':
                            await tdClient?.send({
                                '@type': 'requestQrCodeAuthentication',
                                other_user_ids: []
                            });
                            console.log("SEND");
                            break;
                        case 'authorizationStateWaitOtherDeviceConfirmation':
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
                debugger
            }
        };

        if (tdClient && event?.authorization_state)
            void handleAuth();

    }, [tdClient, event]);


    useEffect(() => {
        console.log('Initializing tdlib')
        const client = new TdClient({
            // useTestDC: false,
            readOnly: false,
            // isBackground: true,
            // logVerbosityLevel: 3,
            // verbosity: 3,
            // jsVerbosity: 3,
            // fastUpdating: true,
            // jsLogVerbosityLevel: "warning",
            useDatabase: false,
            mode: 'wasm',
            onUpdate: onUpdate
        });

        setTdClient(client);
    }, [onUpdate]);


    useEffect(() => {
        if (tdClient) {
            console.log('setTdlibParameters')
            tdClient.send({
                '@type': 'setTdlibParameters',
                parameters: {
                    '@type': 'tdParameters',
                    use_test_dc: false,
                    api_id: process.env.NEXT_PUBLIC_APP_APP_ID,
                    api_hash: process.env.NEXT_PUBLIC_APP_HASH_ID,
                    system_language_code: navigator.language || 'en',
                    device_model: 'Telegram Web Client',
                    application_version: '0.1',
                    use_secret_chats: false,
                    use_message_database: true,
                    use_file_database: true,
                    files_directory: '/'
                }
            })
        }
    }, [tdClient]);


    if (!isLogWithPhone && event && event["@type"] === "updateAuthorizationState") {
        const authState = event["authorization_state"] as TdObject;
        const type = authState["@type"];

        if (type === "authorizationStateWaitOtherDeviceConfirmation")
            return <QrCode link={event.authorization_state.link}/>
    }

    return (
        <div className={styles.container}>
            <h1>Lol Kek</h1>
            <button type="button" onClick={() => {
                tdClient?.send({
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
    )
};

export default Home
