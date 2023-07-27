import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import DestinationInfo from '../../components/destinationInfo/DestinationInfo'
import { filterDestination } from '../../services/destination'

const Destination = () => {
  const { destinationName } = useParams()
  const [destination, setDestination] = useState({})
  useEffect(() => {
    setDestination(filterDestination(destinationName))
    console.log(destination)
  }, [destinationName])

  return (
    <>
      {
        destination?.name && (
          <section>
            <h2><span>01</span> PICK YOUR DESTINATION</h2>
            <img src={destination.images.png} alt="" />
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
              <DestinationInfo destination={destination}/>
            </div>
          </section>
        )
      }
    </>
  )
}

export default Destination