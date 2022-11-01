import {Routes, Route} from "react-router-dom";

import {AuthForm} from "@/pages/authForm/AuthForm";
import {Main} from "@/pages/main/Main";

import {withAuth} from "./providers/withAuth";


const PrivateMain = withAuth(Main);


export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<PrivateMain/>}/>
            <Route path="/auth" element={<AuthForm/>}/>
        </Routes>
    );
};