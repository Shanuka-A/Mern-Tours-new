import { createContext, useEffect, useReducer } from 'react';

const initial_state = {
    user: localStorage.getItem('user')!= undefined ? JSON.parse(localStorage.getItem('user')):null,
    loadibg: false,
    error: null,
};

export const AuthContext = createContext(initial_state);

const AuthReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN_START":
            return {
                user: null,
                loadibg: true,
                error: null,
            };
        case "LOGIN_SUCCESS":
            return {
                user: action.payload,
                loadibg: false,
                error: null,
            }
        case "LOGIN_FAILURE":
            return {
                user: null,
                loadibg: false,
                error: action.payload,
            }

        case "REGISTER_SUCCESS":
            return {
                user: null,
                loadibg: false,
                error: null,
            }
        case "LOGOUT":
            return {
                user: null,
                loadibg: false,
                error: null,
            }

        default:
            return state
    }
}



export const AuthContextProvider = ({children})=>{
    const [state, dispatch] = useReducer(AuthReducer, initial_state)

    useEffect(()=>{
        localStorage.setItem('user',JSON.stringify(state.user))
    },[state.user])

    return <AuthContext.Provider value={{
        user:state.user,
        loading:state.loading,
        error:state.error,
    }}>
        {children}
    </AuthContext.Provider>
}