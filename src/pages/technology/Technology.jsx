import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { AppContext } from '../../routes/Router'
import { filterTechnology } from '../../services/technology'
import TechnologyInfo from '../../components/technologyInfo/TechnologyInfo'
import './technology.scss'
const Technology = () => {
  const navigate = useNavigate()
  const { technologyName } = useParams()
  const [technology, setTechnology] = useState({})
  const {setTechnologyPathName} = useContext(AppContext)
  const technologies = ["Launch vehicle", "Spaceport", "Space capsule", ]

  useEffect(() =>{
    setTechnologyPathName(technologyName)
    setTechnology(filterTechnology(technologyName))
    
  }, [technologyName])
  const separePathName = () => {
    return technologyName.replace('-', ' ')
  }
  const handleTechnology = (technology) => {
    setTechnologyPathName(technology)
    navigate(`/technology/${technology.replace(' ', '-')}`)

  }
  console.log(technology)
  return (
    <>
    <h1>
    
      </h1> 
        <section className='technology'>
          <h2 className='technology__subtitle'><span>03</span>SPACE LAUCH 101
          </h2>

          <div className='technology__container'>
            <img
            className='technology__image'
            src="/images/technology/image-launch-vehicle-landscape.jpg" alt="" />
            <hr/>
            <div className='technology__buttons'>
              <button>1</button>
              <button>2</button>
              <button>3</button>
            </div>
            <div className='technology__info'>
            <TechnologyInfo />
            </div>
              
             
          </div>
        </section>
     
    </>
  )
}

export default Technology