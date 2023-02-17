import { createContext, useEffect, useReducer } from "react"
import Reducer from "./reducer";

const initialState = {
    user: JSON.parse(localStorage.getItem("user")) || {},
    isFetching: false,
    error: false,
    invalidUser: false,
    invalidPassword: false,
}

export const Context = createContext(initialState);

export const ContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(Reducer, initialState);
    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(state.user));
    }, [state.user])
    return (
        <Context.Provider
        value={
            {
            user: state.user,
            isFetching: state.isFetching,
            error: state.error,
            invalidUser: state.invalidUser,
            invalidPassword: state.invalidPassword,
            dispatch
            }
        }
        >
            {children}
        </Context.Provider>
    )
}