import React from "react";
import "./headerTab.scss";
import logo from "../../../public/images/shared/logo.svg";
import { NavLink } from "react-router-dom";
const HeaderTab = () => {
  return (
    <div className="tab">
      <figure className="logo">
        <img src={logo} alt="" />
      </figure>

      <nav className='navtab'>
            <ul>
                <li> 
                    <NavLink to="/">HOME</NavLink>
                </li>
                <li>
                    <NavLink to="/destination/Moon" >DESTINATION</NavLink>
                </li>
                <li>
                    <NavLink to="/crew/Douglas-Hurley" >CREW</NavLink>
                </li>
                <li>
                    <NavLink to="/technology/Launch-vehicle" >TECHNOLOGY</NavLink>
                </li>
            </ul>
        </nav>
        </div>
  );
};

export default HeaderTab;
