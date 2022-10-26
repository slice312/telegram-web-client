import {useState} from "react";
import {TdStates} from "@/constants";
import TdClient, {TdObject} from "tdweb";
import {useTdLib} from "@/shared/api";


interface Props {
    event: TdObject;
}

export const Phone = ({event}: Props) => {
    const {client} = useTdLib();

    const [text, setText] = useState("");

    return (
        <div>
            <h1>Phone</h1>
            <input type="text" value={text} onChange={e => setText(e.target.value)}/>
            <button type="button" onClick={() => {
                console.log("PHONE esubmit", event);

                debugger
                if (event["@type"] === TdStates.Auth.updateAuthorizationState) {
                    const authState = event.authorization_state as TdObject;
                    const type = authState["@type"];
                    if (authState && type === TdStates.Auth.updateAuthorizationState
                        || type === TdStates.Auth.authorizationStateWaitOtherDeviceConfirmation) {
                        client.send({
                            '@type': 'setAuthenticationPhoneNumber',
                            phone_number: text
                        })
                            .then(result => {
                                console.log("ACCEPTED PHONE");
                            })
                            .catch(error => {
                                console.log(error);
                            });
                    }
                }

                // if (
                //     this.authorizationState &&
                //     (this.authorizationState['@type'] === 'authorizationStateWaitPhoneNumber' || this.authorizationState['@type'] === 'authorizationStateWaitOtherDeviceConfirmation')
                // ) {
                //     this.setPhoneNumber(phone);
                // } else {
                //     this.setPhoneNumberRequest = () => this.setPhoneNumber(phone);
                // }
                // tdClient?.send({
                //     "@type": "clientUpdateSetPhone",
                //     "phone": text
                // })
            }
            }>
                Submit
            </button>

        </div>
    )
}