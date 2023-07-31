import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { AppContext } from '../../routes/Router'
import './nav.scss'

const Nav = ({ handleMenuToggle }) => {
    const { destinationPathName, crewPathName, technologyPathName } = useContext(AppContext)

    return (
        <nav className='nav'>
            <ul className='nav__list'>
                <li className='nav__item'>
                    <NavLink
                        to="/"
                        className='nav__item--nav-link'
                        onClick={handleMenuToggle}><span>00</span> HOME</NavLink>
                </li>
                <li className='nav__item'>
                    <NavLink
                        to={`/destination/${destinationPathName}`}
                        className='nav__item--nav-link'
                        onClick={handleMenuToggle}
                    > <span>01</span> DESTINATION</NavLink>
                </li>
                <li className='nav__item'>
                    <NavLink
                        to={`/crew/${crewPathName}`}
                        className='nav__item--nav-link'
                        onClick={handleMenuToggle}
                    ><span>02</span> CREW</NavLink>
                </li>
                <li className='nav__item'>
                    <NavLink
                        to={`/technology/${technologyPathName}`}
                        className='nav__item--nav-link'
                        onClick={handleMenuToggle}
                    ><span>03</span> TECHNOLOGY</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Nav