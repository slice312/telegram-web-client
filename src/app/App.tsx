import {EventSubscription} from "fbemitter";
import {useEffect} from "react";

import {Router} from "./Router";
import "./styles/index.css";
import {tdLibController} from "@/shared/tdlib";
import {AppThemeProvider} from "@/shared/ui/themeProvider";
import {authStore} from "@/td/auth";


export const App = () => {
    useEffect(() => {
        const subscriptions: EventSubscription[] = [];
        subscriptions.push(
            tdLibController.addListener("update", authStore.onUpdate)
        );
        return () => {
            subscriptions.forEach((x) => x.remove());
        };
    }, []);

    return (
        <AppThemeProvider>
            <Router/>
        </AppThemeProvider>
    );
};
