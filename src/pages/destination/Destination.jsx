import React, { useContext, useEffect, useState } from 'react'
import DestinationInfo from '../../components/destinationInfo/DestinationInfo'
import { filterDestination } from '../../services/destination'
import "./destination.scss"
import { AppContext } from '../../routes/Router'
import { useNavigate, useParams } from 'react-router-dom'

const Destination = () => {
  const navigate = useNavigate()
  const { destinationName } = useParams()
  const [destination, setDestination] = useState({})
  const { destinationPathName, setDestinationPathName } = useContext(AppContext)
  const destinations = ["Moon", "Mars", "Europa", "Titan"]

  useEffect(() => {
    setDestination(filterDestination(destinationName))
  }, [destinationPathName])

  const handleDestination = (destination) => {
    setDestinationPathName(destination)
    navigate(`/destination/${destination}`)
  }

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
                    {
                      destinations.map((element, index) => (
                        <li
                        className={`destination__nav__list--item ${destinationPathName === element && "active-destination"}`}
                        key={index + 1}
                        onClick={()=> handleDestination(element)}
                        >{element}</li>
                      ))
                    }
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