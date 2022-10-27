import {EventEmitter} from "fbemitter"
import TdClient, {TdObject, TdOptions} from "tdweb";


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
            mode: 'wasm',
            onUpdate: this.onUpdate
        };

        this.client = new TdClient(this.parameters);

        this.setTdParameters();
    }

    private setTdParameters() {
        if (this.client) {
            console.log('setTdlibParameters')
            void this.client.send({
                "@type": "setTdlibParameters",
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
    }


    public async reloadClient() {
        await this.client?.send({'@type': 'destroy'});
        this.client = new TdClient(this.parameters);
    }


    private onUpdate(update: TdObject) {
        this.emit("update", update);
    }

    public send() {

    }
}

const tdLibController = new TdLibController();
// @ts-ignore
window.controller = tdLibController; // TODO: убрать
export {tdLibController};