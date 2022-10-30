import {useEffect, useRef} from "react";
import {Button, Typography} from "@mui/material";

import QRCodeStyling from "qr-code-styling";
import telegramLogo from "@/assets/images/telegram-logo.png";


import {authAtom, authStore} from "@/shared/stores/auth";
import {useRecoilValue} from "recoil";
import styled from "@emotion/styled";


interface Props {
    onPhone: () => void;
}




const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 25px;
    gap: 25px;
`;


export const QrCode = ({onPhone}: Props) => {
    const link = useRecoilValue(authAtom).qrCodeLink;
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
        <Container>
            <Typography variant="h3" component="h2">
                Qr Code
            </Typography>
            <div ref={qr}></div>
            <Typography>
                1. Open exteraGram or any other client on your phone <br/>
                2. Go to Settings > Devices > Scan QR <br/>
                3. Scan this image to Log in
            </Typography>
            <Button variant="text"  onClick={() => {
                void authStore.setToPhone();
            }}>
                Log with phone number
            </Button>
        </Container>
    );
};