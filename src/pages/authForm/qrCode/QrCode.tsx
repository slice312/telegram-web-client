import {useEffect, useRef} from "react";
import {Button, Typography} from "@mui/material";
import QRCodeStyling from "qr-code-styling";

import {authStore} from "@/td/auth";
import {useAppSelector} from "@/store";

import {Container} from "./styles";

import telegramLogo from "@/assets/images/telegram-logo.png";


export const QrCode = () => {
    const qrCodeLink = useAppSelector(state => state.auth.qrCodeLink);
    console.log("QrCode", qrCodeLink);

    const qr = useRef<HTMLDivElement>(null);


    useEffect(() => {
        const qrCode = new QRCodeStyling({
            width: 300,
            height: 300,
            data: qrCodeLink,
            margin: 0,
            image: telegramLogo,
            qrOptions: {
                typeNumber: 0,
                mode: "Byte",
                errorCorrectionLevel: "Q"
            },
            imageOptions: {
                hideBackgroundDots: true,
                imageSize: 0.4,
                margin: 5
            },
            dotsOptions: {
                type: "square",
                color: "#0b0a0a"
            },
            backgroundOptions: {color: "#ffffff"},
        });

        if (qr.current) {
            qr.current.innerHTML = "";
            qrCode.append(qr.current);
        }
    }, [qrCodeLink]);

    return (
        <Container>
            <Typography variant="h3" component="h2">
                Qr Code
            </Typography>
            <div ref={qr}></div>
            <Typography>
                1. Open Telegram on your phone <br/>
                2. Go to Settings {">"} Devices {">"} Link Desktop Device<br/>
                3. Point your phone at this screen to confirm login
            </Typography>
            <Button variant="text" onClick={() => authStore.setToPhone()}>
                Log with phone number
            </Button>
        </Container>
    );
};