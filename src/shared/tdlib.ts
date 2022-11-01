import {EventEmitter} from "fbemitter";
import TdClient, {TdObject, TdOptions} from "tdweb";

import {TdMethods} from "@/td/tdMethods";


class TdLibController extends EventEmitter {
    private client: TdClient;
    private readonly parameters: TdOptions;

    constructor() {
        super();
        console.log("TdLibController Created");

        this.parameters = {
            readOnly: false,
            // isBackground: true,
            // logVerbosityLevel: 3,
            // verbosity: 3,
            // jsVerbosity: 3,
            // fastUpdating: true,
            // jsLogVerbosityLevel: "warning",
            useDatabase: false,
            mode: "wasm",
            onUpdate: this.onUpdate
        };

        this.client = new TdClient(this.parameters);
        this.setTdParameters();
    }

    private setTdParameters() {
        if (this.client) {
            console.log("setTdlibParameters");
            void this.client.send({
                "@type": "setTdlibParameters",
                parameters: {
                    "@type": "tdParameters",
                    use_test_dc: false,
                    api_id: import.meta.env.VITE_PUBLIC_APP_APP_ID,
                    api_hash: import.meta.env.VITE_PUBLIC_APP_HASH_ID,
                    system_language_code: navigator.language || "en",
                    device_model: "Telegram Web Client",
                    application_version: "0.1",
                    use_secret_chats: false,
                    use_message_database: true,
                    use_file_database: true,
                    files_directory: "/"
                }
            });
        }
    }


    public async reloadClient() {
        await this.client?.send({"@type": "destroy"});
        this.client = new TdClient(this.parameters);
        this.setTdParameters();
        await this.client.send({
            "@type": TdMethods.checkDatabaseEncryptionKey
        });
    }


    // public addListener(eventType: string, callback: (update: TdObject) => void): EventSubscription {
    //     return this.emitter.addListener(eventType, callback);
    // }

    private readonly onUpdate = (update: TdObject) => {
        console.log("UPDATE,", update);
        // console.log("EMITTER", this.emitter);
        this.emit("update", update);
        // super.emit("update", update);
    };


    public readonly send = async (query: TdObject) => {
        await this.client.send(query);
    };
}

const tdLibController = new TdLibController();
// @ts-ignore
window.controller = tdLibController; // TODO: убрать
export {tdLibController};