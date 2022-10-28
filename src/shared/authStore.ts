// import {tdLibController} from "@/shared/tdlib";
import {EventSubscription} from "fbemitter";

export class AuthStore {
    private subscriptions: EventSubscription[];

    constructor() {
        this.subscriptions = [];
    }


    private addTdLibListener() {
        // let subs = tdLibController.addListener('update', this.onUpdate);
        // this.subscriptions.push(subs)
        // subs = tdLibController.addListener('clientUpdate', this.onClientUpdate);
        // this.subscriptions.push(subs);
    }

    private removeTdLibListener() {
        // this.subscriptions.forEach(())
        // tdLibController.removeCurrentListener();
        // tdLibController.off('clientUpdate', this.onClientUpdate);
    }
}