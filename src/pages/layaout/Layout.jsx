import React, { useContext, useEffect, useState } from 'react'
import Header from '../../components/header/header'
import { Outlet, useLocation } from 'react-router-dom'
import "./layout.scss"
import { AppContext } from '../../routes/Router'


const Layout = () => {
    const location = useLocation()
    const [styleBackground, setStyleBackgrund] = useState("")
    const { inNavMobile } = useContext(AppContext)

    useEffect(() => {
        changeBackground()
    }, [location])

    const changeBackground = () => {
        switch (true) {
            case location.pathname.includes("destination"):
                setStyleBackgrund("destination-background")
                break;
            case location.pathname.includes("crew"):
                setStyleBackgrund("crew-background")
                break;
            case location.pathname.includes("technology"):
                setStyleBackgrund("technology-background")
                break;
            default:
                setStyleBackgrund("home-background")
                break;
        }
    }

    return (
        <article className={`layout ${styleBackground} ${inNavMobile && "fixed"}`}>
            <Header />
            <Outlet />
        </article>
    )
}

export default Layout