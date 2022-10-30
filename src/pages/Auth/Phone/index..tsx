import {useState} from "react";
import {TdObject} from "tdweb";
import {authStore, authAtom} from "@/shared/stores/auth";

import styled from "@emotion/styled";
import {Button, TextField, Typography} from "@mui/material";
import {useRecoilValue} from "recoil";
import {WaitCode} from "@/pages/Auth/Phone/WaitCode";


interface Props {
    event: TdObject;
}

const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;


export const Phone = ({event}: Props) => {
    // const {client} = useTdLib();
    const authState = useRecoilValue(authAtom);

    if (authState.isWaitConfirmationCode)
        return <WaitCode/>;


    const [text, setText] = useState("");

    return (
        <Form>
            <Typography variant="h3" component="h2">
                Phone
            </Typography>
            <TextField
                value={text}
                onChange={e => setText(e.target.value)}
            />
            <Button
                variant="contained"
                onClick={() => {
                    authStore.authByPhone(text)
                        .then(result => {
                            console.log("ACCEPTED PHONE");
                        })
                        .catch(error => {
                            console.log(error);
                        });
                }}
            >
                Submit
            </Button>
        </Form>
    );
};