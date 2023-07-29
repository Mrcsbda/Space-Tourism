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
  const { setTechonologyPathName } = useContext(AppContext)
  const technologies = 
  ["Launch vehicle",
   "Spaceport", 
   "Space capsule", ]

  useEffect(() =>{
    setTechonologyPathName(technologyName)
    setTechnology(filterTechnology(separePathName()))
    
  }, [technologyName])
  const separePathName = () => {
    return technologyName.replace('-', ' ')
  }
  const handleTechnology = (technology) => {
    setTechonologyPathName(technology)
    navigate(`/technology/${technology.replace(' ', '-')}`)

  }
  
  return (
    <>
    {technology?.name&& (
        <section className='technology'>
          <h2 className='technology__subtitle'><span>03</span>SPACE LAUCH 101
          </h2>

          <div className='technology__container'>
            <img
            className='technology__image'
            src={technology.images.landscape} alt={technology.name} />
            <img className='hidden'
            src={technology.images.portrait} alt={technology.name} />
            <hr/>
            
            <div className='technology__info'>
            <div className='technology__buttons'>
              {technologies.map((item, index)=>(
                <button key={index+1}
                className={`${technology.name===item && "active-technology"}`}
                onClick={()=> handleTechnology(item)}
                >  
                  {index+1}
                </button>
              ))}
              
            </div>
            <TechnologyInfo technology={technology} />
            </div>
              
             
          </div>
        </section>
     )}
    </>
  );
};

export default Technology