import {useEffect, useRef} from "react";

import telegramLogo from "@/assets/images/telegram-logo.png";
import {useTdLib} from "@/shared/api";



function QR(mydata) {
    let qrCode;
    if (typeof window !== "undefined") {           //Only do this on the client
        const QRCodeStyling = require("qr-code-styling");
        qrCode = new QRCodeStyling(mydata)
        return qrCode
    }
}


interface Props {
    link: string;
}


export const QrCode = ({link, onPhone}: Props) => {

    const {client, reloadClient} = useTdLib();

    const qr = useRef<HTMLDivElement>(null);


    useEffect(() => {
        const options = {
            width: 300,
            height: 300,
            data: link,
            margin: 0,
            image: telegramLogo.src,
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
                color: "#0b0a0a",
                gradient: null
            },
            backgroundOptions: {color: "#ffffff"},
        }


        const qrCode = QR(options);


        if (qr.current) {
            qr.current.innerHTML = '';
            qrCode.append(qr.current);
        }
    }, []);

    return (
        <div>
            <h1>Qr Code</h1>
            <div ref={qr}></div>
            <button type="button" onClick={() => {
                client?.send({
                    "@type": "logOut"
                });
            }}>
                Log out
            </button>
            <button type="button" onClick={async () => {
                await client?.send({
                    "@type": "logOut"
                });
                reloadClient()

                onPhone()
            }}>
                Log with phone number
            </button>
        </div>
    );
};