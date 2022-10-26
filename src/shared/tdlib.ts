import {EventEmitter} from "fbemitter"
import TdClient, {TdOptions} from "tdweb";


export class Builder{
    public static build (options: TdOptions) {

    }

    const clientd = new TdClient({
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
        // onUpdate: onUpdate
    });
}


export class TdLibController extends EventEmitter {

    private readonly parameters: object;
    private readonly client: TdClient;

    constructor(client: TdClient) {
        super();


        this.client = client
        this.parameters = {};
    }

    public init() {
        // await client?.send({'@type': 'destroy'});

        const clientd = new TdClient({
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
    }

    public send() {

    }

}