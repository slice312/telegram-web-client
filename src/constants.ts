export const TdStates = {
    Auth: {
        updateAuthorizationState: "updateAuthorizationState",
        authorizationStateWaitOtherDeviceConfirmation: "authorizationStateWaitOtherDeviceConfirmation",
        authorizationStateWaitPhoneNumber: "authorizationStateWaitPhoneNumber"
    }
};

enum AuthState {
    updateAuthorizationState = "updateAuthorizationState",
    authorizationStateWaitOtherDeviceConfirmation = "authorizationStateWaitOtherDeviceConfirmation"
}

//
// interface AppState {
//     auth: {
//         state: AuthState;
//         userData: UserData
//     },
//     threads: {
//         [key: string]: Thread
//     }
// }