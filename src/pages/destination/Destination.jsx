import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import DestinationInfo from '../../components/destinationInfo/DestinationInfo'
import { filterDestination } from '../../services/destination'
import "./destination.scss"

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
          <section className='destination'>
            <h2 className='destination__subtitle'><span>01</span> PICK YOUR DESTINATION</h2>
            <div className='destination__content-container'>
              <img className='destination__image' src={destination.images.png} alt={destination.name} />
              <div className='destination__content'>
                <nav className='destination__nav'>
                  <ul className='destination__nav__list'>
                    <li>
                      <NavLink className='destination__nav__list--item' to="/destination/Moon">Moon</NavLink>
                    </li>
                    <li>
                      <NavLink className='destination__nav__list--item' to="/destination/Mars">Mars</NavLink>
                    </li>
                    <li>
                      <NavLink className='destination__nav__list--item' to="/destination/Europa">Europa</NavLink>
                    </li>
                    <li>
                      <NavLink className='destination__nav__list--item' to="/destination/Titan">Titan</NavLink>
                    </li>
                  </ul>
                </nav>
                <DestinationInfo destination={destination} />
              </div>
            </div>
          </section>
        )
      }
    </>
  )
}

export default Destination