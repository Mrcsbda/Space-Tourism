import React, { useEffect } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import DestinationInfo from '../../components/destinationInfo/DestinationInfo'

const Destination = () => {
  const { destinationName } = useParams()
  useEffect(() => {
    console.log(destinationName)
  }, [destinationName])

  return (
    <section>
      <h2></h2>
      <img src="" alt="" />
      <div>
        <nav>
          <li>
            <NavLink to="/destination/Moon">Moon</NavLink>
          </li>
          <li>
            <NavLink to="/destination/Mars">Mars</NavLink>
          </li>
          <li>
            <NavLink to="/destination/Europa">Europa</NavLink>
          </li>
          <li>
            <NavLink to="/destination/Titan">Titan</NavLink>
          </li>
        </nav>
        <DestinationInfo/>
      </div>
    </section>
  )
}

export default Destination