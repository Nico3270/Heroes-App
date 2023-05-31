import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContex";

export const LoginPage = () => {
    const [input, setInput] = useState("");
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const onLogin = () => {

        login(input);

        navigate("/marvel", { replace: true })
    }


    return (
        <>
            <div className="container -mt5">
                <h1>Login Page</h1>

                <input type="text" className="form-control mt-2" onChange={event => setInput(event.target.value)}

                    value={input} placeholder="Nombre de usuario" ></input>
                <button className="btn btn-success mt-2" onClick={() => onLogin()}>Login</button>

            </div>
        </>
    )
}