import React from "react";
import ReactDOM from "react-dom/client";
import {App} from "./app";
import {TelegramProvider} from "@/shared/api";
import {store} from "@/shared/store";


import {Provider} from "react-redux";


ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <Provider store={store}>
        <TelegramProvider>
            <App/>
        </TelegramProvider>
    </Provider>
);
