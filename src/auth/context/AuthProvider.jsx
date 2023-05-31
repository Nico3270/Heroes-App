import { useReducer } from "react"
import { AuthContext } from "./AuthContex"
import { authReducer } from "./authReducer"
import { types } from "../types/types"

const initilaState = { logged: false }

const init = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    return {
        logged: !!user,
        user: user
    }
}
export const AuthProvider = ({ children }) => {

    const [authState, dispatch] = useReducer(authReducer, initilaState, init);

    const login = async (name = " ") => {
        const user = { name: name, id: "Nico96", name }
        const action = { type: types.login, payload: user };
        localStorage.setItem("user", JSON.stringify(user));
        dispatch(action);
    }

    const logout = () => {
        localStorage.removeItem("user");
        const action = {type:types.logout};
        dispatch(action);
    }

    return (
        <AuthContext.Provider value={{ ...authState, login: login, logout:logout }} >
            {children}
        </AuthContext.Provider>
    )
}


