import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './app';
import './index.css'
import {TelegramProvider} from "@/shared/api";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <TelegramProvider>
        <App/>
    </TelegramProvider>
)
