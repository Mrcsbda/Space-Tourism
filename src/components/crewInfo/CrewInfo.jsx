import React from 'react';
import './crewInfo.scss';

const CrewInfo = ({crew}) => {
  return (
    <div className='crew-info'>
        <h4 className='crew-info__subtitle'>{(crew.role).toUpperCase()}</h4>
        <h1 className='crew-info__title'>{(crew.name).toUpperCase()}</h1>
        <p className='crew-info__description'>{crew.bio}</p>
    </div>
  )
}

export default CrewInfo