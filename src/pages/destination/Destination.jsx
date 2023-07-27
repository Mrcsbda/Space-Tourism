import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import DestinationInfo from '../../components/destinationInfo/DestinationInfo'
import { filterDestination } from '../../services/destination'

const Destination = () => {
  const { destinationName } = useParams()
  const [destination, setDestination] = useState({})

  useEffect(() => {
    setDestination(filterDestination(destinationName))
  }, [destinationName])

  return (
    <>
      {
        destination?.name && (
          <section className='destination-container'>
            <h2 className='destination__subtitle'><span>01</span> PICK YOUR DESTINATION</h2>
            <img className='destination__image' src={destination.images.png} alt={destination.name} />
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