export const enum TdAuthState {
    updateAuthorizationState = "updateAuthorizationState",
    authorizationStateClosed = "authorizationStateClosed",
    authorizationStateWaitEncryptionKey = "authorizationStateWaitEncryptionKey",
    authorizationStateWaitOtherDeviceConfirmation = "authorizationStateWaitOtherDeviceConfirmation",
    authorizationStateWaitPhoneNumber = "authorizationStateWaitPhoneNumber",
    authorizationStateWaitCode = "authorizationStateWaitCode",
    authorizationStateReady = "authorizationStateReady"
}
