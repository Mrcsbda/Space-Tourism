import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { AppContext } from '../../routes/Router'

const Nav = () => {
    const { destinationPathName } = useContext(AppContext)
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to={`/destination/${destinationPathName}`} >Destination</NavLink>
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