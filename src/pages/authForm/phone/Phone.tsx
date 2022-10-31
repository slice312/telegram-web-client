import {useState} from "react";
import {Button, TextField, Typography} from "@mui/material";
import styled from "@emotion/styled";

import {useAppSelector} from "@/store";
import {authStore} from "@/td/auth";

import {WaitCode} from "./WaitCode";


const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;


export const Phone = () => {
    const authState = useAppSelector(state => state.auth);

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