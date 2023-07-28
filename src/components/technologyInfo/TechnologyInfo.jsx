import React from 'react'
import "./technologyInfo.scss"

const TechnologyInfo = ({technology}) => {
  return (
    <div className='technology-info'>
           <h4 className='technology-info__subtitle'>
            THE TERMINOLOGY...</h4>
           <h1 className='technology-info__title'>{(technology.name).toUpperCase()}</h1>
           <p className='technology-info__description'>
           {(technology.description).toUpperCase()}
           </p>
        </div>
  )
}

export default TechnologyInfo