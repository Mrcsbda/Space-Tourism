import React from 'react'
import "./headerDek.scss";
import logo from "../../../public/images/shared/logo.svg";
import { NavLink } from "react-router-dom";
const HeaderDek = () => {
  return (
    <div className="dek">
      <figure className="logo">
        <img src={logo} alt="" />
      </figure>

      <nav className='navdek'>
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
        </div>
  )
}

export default HeaderDek