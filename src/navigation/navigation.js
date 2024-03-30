import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomeScreen from "../pages/home-screen"
import AboutScreen from "../pages/about-screen"
import SettingScreen from "../pages/setting.-screen"
import ContactScreen from "../pages/contact-screen"
import ProductScreen from "../pages/product-details"
import InvalidScreen from "../pages/invalid-screen"
import { useState, createContext } from "react"
import SortbyPrice from "../pages/sortbyPrice"
import LoginScreen from "../pages/preRoutes/login"
import RegistrationScreen from "../pages/preRoutes/registration"




export const MessageInfo = createContext()

const NavigationStack = () => {
    const [message, setMessage] = useState("Good Morning")
    const [Login, setLogin] = useState(false)

    const ChangeMsg = () => {
        setMessage("Good evening")
    }
    const LoginHandler = () => {
        setLogin(true)
    }

    return (
        <>
            <BrowserRouter>

                <MessageInfo.Provider value={{
                    message,
                    name: " Hyderabd",
                    messageChanger: ChangeMsg,
                    ChangeLogin: LoginHandler
                }
                }>
                    <Routes>
                        {
                            true
                                ?
                                <>
                                    <Route path="/" Component={HomeScreen} />
                                    <Route path="/About" Component={AboutScreen} />
                                    <Route path="/Contact" Component={ContactScreen} />
                                    <Route path="/Setting" Component={SettingScreen} />
                                </>
                                :
                                <>
                                    <Route path="/" Component={LoginScreen} />
                                    <Route path="/registration" Component={RegistrationScreen} />
                                </>
                        }

                        <Route path="/Sort" Component={SortbyPrice} />

                        <Route path="/:category/:id" Component={ProductScreen} />

                        <Route path="*" Component={InvalidScreen} />
                    </Routes>
                </MessageInfo.Provider>
            </BrowserRouter>
        </>
    )
}
export default NavigationStack