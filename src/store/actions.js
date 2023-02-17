export const LoginStart = () => (
    {
        type: "LOGIN_START",
    }
)

export const LoginSuccess = (user) => (
    {
        type: "LOGIN_SUCCESS",
        payload: user
    }
)

export const LoginFailure = () => (
    {
        type: "LOGIN_FAILURE",
    }
)

export const LoginInvalidUser = () => (
    {
        type: "LOGIN_INVALID_USER",
    }
)

export const LoginInvalidPassword = () => (
    {
        type: "LOGIN_INVALID_PASSWORD",
    }
)

export const LogOut = () => (
    {
        type: "LOGOUT",
    }
)