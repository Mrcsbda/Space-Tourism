import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { AppContext } from '../../routes/Router'
import './nav.scss'

const Nav = () => {
    const { destinationPathName } = useContext(AppContext)
    return (
        <nav className='nav'>
            <ul>
                <li>
                    <NavLink to="/">01 HOME</NavLink>
                </li>
                <li>
                    <NavLink to={`/destination/${destinationPathName}`} >Destination</NavLink>
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