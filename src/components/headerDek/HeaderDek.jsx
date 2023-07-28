import React, { useContext } from 'react'
import "./headerDek.scss";
import logo from "../../../public/images/shared/logo.svg";
import { NavLink, useLocation, useParams } from "react-router-dom";
import { AppContext } from '../../routes/Router';
const HeaderDek = () => {
  const { destinationPathName, crewPathName, technologyPathName } = useContext(AppContext)
  const { destinationName } = useParams()
  const { crewName } = useParams()
  const { technologyName } = useParams()
  const location = useLocation()
  return (
    <div className="dek">
      <figure className="logo">
        <img src={logo} alt="" />
      </figure>
      <nav className='navdek'>
        <ul className='navdek__list'>
          <li>
            <NavLink className={location.pathname === "/" && "active-desk"} to="/"><span>00</span>HOME</NavLink>
          </li>
          <li>
            <NavLink
              className={destinationName === destinationPathName && "active-desk"}
              to={`/destination/${destinationPathName}`} ><span>01</span>DESTINATION</NavLink>
          </li>
          <li>
            <NavLink
              className={crewName === crewPathName && "active-desk"}
              to={`/crew/${crewPathName}`} ><span>02</span> CREW</NavLink>
          </li>
          <li>

            <NavLink
              className={technologyName === technologyPathName && "active-desk"}
              to={`/technology/${technologyPathName}`} ><span>03</span>TECHNOLOGY</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default HeaderDek