import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
    const navigate = useNavigate();

    const onLogin = () => {
        navigate("/marvel", { replace: true })
    }


    return (
        <>
            <div className="container -mt5">
                <h1>Login Page</h1>
                <button className="btn btn-success" onClick={() => onLogin()}>Login</button>
            </div>
        </>
    )
}