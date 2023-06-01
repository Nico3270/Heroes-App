import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "../../ui/components/Navbar"
import { MarvelPage } from "../pages/MarvelPage"
import { DcPage } from "../pages/DcPage"
import { LoginPage } from "../../auth/pages/LoginPage"
import { Search } from "../pages/Search"
import { HeroPage } from "../pages/HeroPage"
import { useContext } from "react"
import { AuthContext } from "../../auth/context/AuthContex"


export const HeroesRoutes = () => {
    const {user} = useContext ( AuthContext);
    
    
    return (
        <>
            <Navbar usuario={user.name} rutas={[{url:"marvel", clase:"danger", nombre:"Heroes de Marvel"}, 
            {url:"dc", clase:"warning", nombre:"Heroes DC"}, {url:"login", clase:"success", nombre:"Login"},
            {url:"search", clase:"info", nombre:"Search"}]} />
            <div className="container">
            <Routes>
                <Route path="/marvel" element={<MarvelPage />} />
                <Route path="/dc" element={<DcPage />} />
                <Route path="/search" element={<Search />} />
                <Route path="/hero/:id" element={<HeroPage />} />
                <Route path="/login" element={<LoginPage />} />
            </Routes>
            </div>
        </>
    )
}