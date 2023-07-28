import React from 'react'
import { NavLink } from 'react-router-dom'
import './nav.scss'
const Nav = () => {
    return (
        <nav className='nav'>
            <ul>
                <li> 
                    <NavLink to="/">01 HOME</NavLink>
                </li>
                <li>
                    <NavLink to="/destination/Moon" >02 DESTINATION</NavLink>
                </li>
                <li>
                    <NavLink to="/crew/Douglas-Hurley" >03 CREW</NavLink>
                </li>
                <li>
                    <NavLink to="/technology/Launch-vehicle" >04 TECHNOLOGY</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Nav