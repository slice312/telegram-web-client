import {useEffect} from "react";
import {QrCode} from "./qrCode/QrCode";
import {Phone} from "./phone/Phone";

import {useAppSelector} from "@/store";


import {tdLibController} from "@/shared/tdlib";

import {authStore} from "@/td/auth";

import {EventSubscription} from "fbemitter";
import {Paper} from "@mui/material";
import {ChatsBar} from "@/components/chatsBar/ChatsBar";





export const AuthForm = () => {


    useEffect(() => {
        const subscriptions: EventSubscription[] = [];
        subscriptions.push(tdLibController.addListener("update", authStore.onUpdate));
        return () => {
            subscriptions.forEach(x => x.remove());
        };
    }, []);


    const authState = useAppSelector(state => state.auth);



    return <Phone/>;


    if (!authState.isAuthenticated) {
        return (
            <Paper elevation={0} square>
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