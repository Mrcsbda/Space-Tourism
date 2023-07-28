import React, { useContext } from "react";
import "./headerTab.scss";
import logo from "../../../public/images/shared/logo.svg";
import { NavLink, useLocation, useParams } from "react-router-dom";
import { AppContext } from "../../routes/Router";

const HeaderTab = () => {
  const { destinationPathName, crewPathName, technologyPathName } = useContext(AppContext)
  const { destinationName } = useParams()
  const { crewName } = useParams()
  const { technologyName } = useParams()
  const location = useLocation()

  return (
    <div className="tab">
      <figure className="logo">
        <img src={logo} alt="" />
      </figure>

      <nav className='navtab'>
        <ul>
          <li>
            <NavLink className={location.pathname === "/" && "active-tab"} to="/">HOME</NavLink>
          </li>
          <li>
            <NavLink
              className={destinationName === destinationPathName && "active-tab"}
              to={`/destination/${destinationPathName}`} >DESTINATION</NavLink>
          </li>
          <li>
            <NavLink
              className={crewName === crewPathName && "active-tab"}
              to={`/crew/${crewPathName}`} >CREW</NavLink>
          </li>
          <li>
            <NavLink
              className={technologyName === technologyPathName && "active-tab"}
              to={`/technology/${technologyPathName}`} >TECHNOLOGY</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default HeaderTab;
