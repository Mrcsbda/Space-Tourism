import React, { useContext } from "react";
import "./headerTab.scss";
import logo from "../../../public/images/shared/logo.svg";
import { NavLink } from "react-router-dom";
import { AppContext } from "../../routes/Router";
const HeaderTab = () => {
  const { destinationPathName, crewPathName, technologyPathName } = useContext(AppContext)
  return (
    <div className="tab">
      <figure className="logo">
        <img src={logo} alt="" />
      </figure>

      <nav className='navtab'>
        <ul>
          <li>
            <NavLink to="/">01 HOME</NavLink>
          </li>
          <li>
            <NavLink to={`/destination/${destinationPathName}`} > 04 DESTINATION</NavLink>
          </li>
          <li>
            <NavLink to={`/crew/${crewPathName}`} >03 CREW</NavLink>
          </li>
          <li>
            <NavLink to={`/technology/${crewPathName}`} >04 TECHNOLOGY</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default HeaderTab;
