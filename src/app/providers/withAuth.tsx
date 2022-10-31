import React from "react";
import {Navigate} from "react-router-dom";

import {useAppSelector} from "@/store";


export const withAuth = <T extends object>(Component: React.ComponentType<T>) => {
    return (props: T) => {
        const isAuthenticated = useAppSelector(state => state.auth.isAuthenticated);
        if (!isAuthenticated)
            return <Navigate to="/auth"/>;
        return <Component {...props} />;
    };
};