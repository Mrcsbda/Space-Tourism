import React, { useEffect, useState } from 'react'
import Header from '../../components/header/header'
import { Outlet, useLocation } from 'react-router-dom'
import "./layout.scss"


const Layout = () => {
    const location = useLocation()
    const [styleBackground, setStyleBackgrund] = useState("")

    useEffect(() => {
        changeBackground()
    }, [location])

    const changeBackground = () => {
        switch (true) {
            case location.pathname.includes("destination"):
                setStyleBackgrund("destination")
                break;
            case location.pathname.includes("crew"):
                setStyleBackgrund("crew")
                break;
            case location.pathname.includes("technology"):
                setStyleBackgrund("technology")
                break;
            case location.pathname === "/":
                setStyleBackgrund("home")
                break
            default: ""
                break;
        }
    }

    return (
        <div className={styleBackground}>
            <Header />
            <Outlet />
        </div>
    )
}

export default Layout