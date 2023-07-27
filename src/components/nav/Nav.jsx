import React from 'react'
import { NavLink } from 'react-router-dom'
import './nav.scss'
const Nav = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/destination/Moon" >Destination</NavLink>
                </li>
                <li>
                    <NavLink to="/crew/Douglas-Hurley" >Crew</NavLink>
                </li>
                <li>
                    <NavLink to="/technology/Launch-vehicle" >Techonology</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Nav