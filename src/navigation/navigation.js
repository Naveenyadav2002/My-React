import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomeScreen from "../pages/home-screen"
import AboutScreen from "../pages/about-screen"
import SettingScreen from "../pages/setting.-screen"
import ContactScreen from "../pages/contact-screen"
import ProductScreen from "../pages/product-details"
import InvalidScreen from "../pages/invalid-screen"

const NavigationStack = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" Component={HomeScreen} />
                    <Route path="/About" Component={AboutScreen} />
                    <Route path="/Contact" Component={ContactScreen} />
                    <Route path="/Setting" Component={SettingScreen} />

                    <Route path="/:category/:id" Component={ProductScreen} />

                    <Route path="*" Component={InvalidScreen} />
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default NavigationStack