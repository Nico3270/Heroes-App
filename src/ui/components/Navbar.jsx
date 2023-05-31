
import { Link, useNavigate } from "react-router-dom";
import { Toast } from "./Toast";
import { useContext } from "react";
import { AuthContext } from "../../auth/context/AuthContex";

export const Navbar = ({ rutas , usuario}) => {
    const { logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const onLogout = () => {
        logout();
       navigate("/login", {replace:true})
    }
    return (
        <>
            <nav className="navbar  navbar-expand-lg navbar-dark rounded-3 barra " >
                <div className="container-fluid ">
                    <div className="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
                        <ul className="navbar-nav ">
                            {rutas.map((ruta) => {
                                return (
                                    <li className="nav-item" key={ruta.url}>
                                        <Link to={`/${ruta.url}`} className={`btn btn-lg btn-outline-${ruta.clase} me-5`}>
                                            {ruta.nombre}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    <Toast user={usuario} funcion={onLogout} />
                </div>
            </nav>
        </>
    );
};