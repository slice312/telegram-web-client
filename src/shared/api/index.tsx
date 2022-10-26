import {ReactNode, createContext, useContext, useState, useCallback, useEffect} from "react";
import TdClient, {TdObject} from "tdweb";

interface TelegramContextValue {
    client: Nullable<TdClient>;
    event: Nullable<TdObject>;
}

const TelegramContext = createContext<Nullable<TelegramContextValue>>(null);


interface Props {
    children: ReactNode
}

const TelegramProvider = (props: Props) => {
    const [client, setClient] = useState<Nullable<TdClient>>(null);
    const [event, setEvent] = useState<Nullable<TdObject>>(null);


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
    }, []);

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

        setClient(client);
    }, [onUpdate]);


    useEffect(() => {
        if (client) {
            console.log('setTdlibParameters')
            client.send({
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
    }, [client]);

    const reloadClient = () => {
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

        setClient(client);
    }

    return (
        <TelegramContext.Provider value={{
            client,
            event,
            reloadClient
        }}
        >
            {props.children}
        </TelegramContext.Provider>
    );
};

const useTdLib = () => {
    const context = useContext(TelegramContext);
    if (!context)
        throw new Error("useTdLib must be used within a TelegramProvider");

    return context;
};


export {TelegramProvider, useTdLib};