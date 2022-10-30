import {useState} from "react";
import TdClient, {TdObject} from "tdweb";
import {authStore} from "@/shared/stores/auth";


interface Props {
    event: TdObject;
}

export const Phone = ({event}: Props) => {
    // const {client} = useTdLib();


    const [text, setText] = useState("");

    return (
        <div>
            <h1>Phone</h1>
            <input type="text" value={text} onChange={e => setText(e.target.value)}/>
            <button type="button" onClick={async () => {
                console.log("PHONE esubmit", event);
                authStore.authByPhone(text)


                    .then(result => {
                        console.log("ACCEPTED PHONE");
                    })
                    .catch(error => {
                        console.log(error);
                    });

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
        ;
};