import React, { useContext } from 'react'
import "./headerDek.scss";
import logo from "../../../public/images/shared/logo.svg";
import { Link, useLocation, useParams } from "react-router-dom";
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
            <Link className={location.pathname === "/" && "active-desk"} to="/"><span>00</span>HOME</Link>
          </li>
          <li>
            <Link
              className={destinationName === destinationPathName && "active-desk"}
              to={`/destination/${destinationPathName}`} ><span>01</span>DESTINATION</Link>
          </li>
          <li>
            <Link
              className={crewName === crewPathName && "active-desk"}
              to={`/crew/${crewPathName}`} ><span>02</span> CREW</Link>
          </li>
          <li>

            <Link
              className={technologyName === technologyPathName && "active-desk"}
              to={`/technology/${technologyPathName}`} ><span>03</span>TECHNOLOGY</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default HeaderDek