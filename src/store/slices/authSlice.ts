import {createSlice, PayloadAction} from "@reduxjs/toolkit";


export const authSlice = createSlice({
    name: "auth",
    initialState: {
        isAuthenticated: false,
        isLoginByPhoneNumber: false,
        isWaitConfirmationCode: false,
        qrCodeLink: ""
    },
    reducers: {
        waitPhone: (state) => {
            state.isAuthenticated = false;
            state.isLoginByPhoneNumber = true;
            state.isWaitConfirmationCode = false;
            state.qrCodeLink = "";
        },
        waitConfirmationCode: (state) => {
            state.isAuthenticated = false;
            state.isLoginByPhoneNumber = true;
            state.isWaitConfirmationCode = true;
            state.qrCodeLink = "";
        },
        waitQrCodeConfirmation: (state, action: PayloadAction<string>) => {
            state.isAuthenticated = false;
            state.isLoginByPhoneNumber = false;
            state.isWaitConfirmationCode = false;
            state.qrCodeLink = action.payload;
        }
    }
});