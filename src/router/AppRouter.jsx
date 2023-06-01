import { Navigate, Route, Routes } from "react-router-dom"
import { LoginPage } from "../auth/pages/LoginPage"
import { HeroesRoutes } from "../heroes/routes/HeroesRoutes"
import { PrivateRoute } from "./PrivateRoute"
import { PublicRoute } from "./PublicRoute"

export const AppRouter = () => {
    return (
        <>
            <Routes>
                //Ruta pública - No permite volver al Login si se esta autenticado
                <Route path="/login" element={
                    <PublicRoute>
                        <LoginPage />
                    </PublicRoute>
                }/>
                //Ruta privada - No permite acceder a los datos de HeroesRoutes si no se ha hecho login
                <Route path="/login" element={<LoginPage />} />
                <Route path="/*" element={
                    <PrivateRoute>
                        <HeroesRoutes />
                    </PrivateRoute>
                } />
            </Routes>
        </>
    )
}