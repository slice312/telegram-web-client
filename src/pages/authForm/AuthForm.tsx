import {QrCode} from "./qrCode/QrCode";
import {Phone} from "./phone/Phone";

import {useAppSelector} from "@/store";


import {Paper} from "@mui/material";
import {ChatsBar} from "@/components/chatsBar/ChatsBar";





export const AuthForm = () => {
    const authState = useAppSelector(state => state.auth);



    if (!authState.isAuthenticated) {
        return (
            <Paper elevation={0} square sx={{display: "flex"}}>
                <ChatsBar/>
            </Paper>
        );
    }


    if (authState.isLoginByPhoneNumber)
        return <Phone/>;
    return <QrCode/>;


    return (
        <div>
        </div>
    );
};