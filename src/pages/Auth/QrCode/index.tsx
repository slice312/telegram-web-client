import {useEffect, useRef} from "react";

import QRCodeStyling from "qr-code-styling";
import telegramLogo from "@/assets/images/telegram-logo.png";
import {useTdLib} from "@/shared/api";



interface Props {
    link?: string;
    onPhone: () => void;
}


export const QrCode = ({link, onPhone}: Props) => {

    console.log("QrCode", link);
    // const {client, reloadClient} = useTdLib();

    const qr = useRef<HTMLDivElement>(null);


    useEffect(() => {
        const qrCode = new QRCodeStyling({
            width: 300,
            height: 300,
            data: link,
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
    }, [link]);

    return (
        <div>
            <h1>Qr Code</h1>
            <div ref={qr}></div>
            <button type="button" onClick={() => {
                // client?.send({
                //     "@type": "logOut"
                // });
            }}>
                Log out
            </button>
            <button type="button" onClick={async () => {
                // await client?.send({
                //     "@type": "close"
                // });
                console.log("CLOSED");
                // await reloadClient();

                onPhone();
            }}>
                Log with phone number
            </button>
        </div>
    );
};