import React from 'react'
import Header from '../../components/header/header'
import { Outlet } from 'react-router-dom'
import "./layout.scss"

const Layout = () => {
    return (
        <>
            <Header />
            <Outlet/>
        </>
    )
}

export default Layout