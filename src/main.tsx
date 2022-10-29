import React from "react";
import ReactDOM from "react-dom/client";
import {App} from "./app";
import {RecoilRoot} from "recoil";
import RecoilNexus from "recoil-nexus";


ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <RecoilRoot>
        <RecoilNexus/>
        <App/>
    </RecoilRoot>
);
