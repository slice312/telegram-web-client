import {QrCode} from "./qrCode/QrCode";
import {Phone} from "./phone/Phone";

import {useAppSelector} from "@/store";


import {Navigate} from "react-router-dom";


export const AuthForm = () => {
    const authState = useAppSelector(state => state.auth);
    if (authState.isAuthenticated)
        return <Navigate to="/"/>;

    if (authState.isLoginByPhoneNumber)
        return <Phone/>;
    return <QrCode/>;


    return (
        <>
        </>
    );
};