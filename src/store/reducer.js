const Reducer = (state, action) => {
    switch(action.type) {
        case "LOGIN_START":
            return {
                user: {},
                isFetching: true,
                error: false
            };
        case "LOGIN_SUCCESS":
            return {
                user: action.payload,
                isFetching: false,
                error: false
            };
        case "LOGIN_FAILURE":
            return {
                user: {},
                isFetching: false,
                error: true,
            };
        case "LOGIN_INVALID_USER":
            return {
                user: {},
                isFetching: false,
                error: false,
                invalidPassword: false,
                invalidUser: true
            };
        case "LOGIN_INVALID_PASSWORD":
            return {
                user: {},
                isFetching: false,
                error: false,
                invalidUser: false,
                invalidPassword: true
            };
        case "LOGOUT":
            return {
                ...state,
                user: {},
            }
        default:
            return {
                ...state
            }
    }
}

export default Reducer;