import React, { useContext } from "react";
import "./headerTab.scss";
import logo from "../../../public/images/shared/logo.svg";
import { Link, useLocation, useParams } from "react-router-dom";
import { AppContext } from "../../routes/Router";

const HeaderTab = () => {
  const { destinationPathName, crewPathName, technologyPathName } = useContext(AppContext)
  const { destinationName , crewName ,technologyName } = useParams()
  const location = useLocation()

  return (
    <div className="tab">
      <figure className="logo">
        <img src={logo} alt="" />
      </figure>

      <nav className='navtab'>
        <ul>
          <li>
            <Link className={location.pathname === "/" ? "active-tab" : ""} to="/">HOME</Link>
          </li>
          <li>
            <Link
              className={destinationName === destinationPathName ? "active-tab" : ""}
              to={`/destination/${destinationPathName}`} >DESTINATION</Link>
          </li>
          <li>
            <Link
              className={crewName === crewPathName ? "active-tab" : ""}
              to={`/crew/${crewPathName}`} >CREW</Link>
          </li>
          <li>
            <Link
              className={technologyName === technologyPathName ? "active-tab" : ""}
              to={`/technology/${technologyPathName}`} >TECHNOLOGY</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default HeaderTab;
