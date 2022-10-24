import {useEffect, useRef} from "react";
import {QR} from "../../index";


export const QrCode = ({link}) => {

    const qr = useRef();

    useEffect(() => {
        const qrCode = QR({
            width: 400,
            height: 400,
            data: link,
            // image: tg_logo,
            dotsOptions: {
                color: '#25abec',
                type: 'square'
            },
            backgroundOptions: {
                color: 'transparent'
            },
            imageOptions: {
                crossOrigin: 'anonymous',
                margin: 20
            }
        });

        qr.current.innerHTML = '';
        qrCode.append(qr.current);
    }, []);

    return (
        <div>
            <h1>Qr Code</h1>
            <div ref={qr}></div>
            <button type="button" onClick={() => {
            }}>
                Log with phone number
            </button>
        </div>
    );
};