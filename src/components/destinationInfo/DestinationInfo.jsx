import React from 'react'
import "./destinationInfo.scss"


const DestinationInfo = ({ destination }) => {
    return (
        <div >
            <h1 className='destination__title'>{(destination.name).toUpperCase()}</h1>
            <p className='destination__description'> {destination.description}</p>
            <hr className='destination__separate-line' />
            <div className='destination__info'>
                <div className='destination__distance'>
                    <h3 className='destination__distance--title' >AVG. DISTANCE</h3>
                    <p className='destination__distance--text'>{destination.distance}</p>
                </div>
                <div className='destination__travel'>
                    <h3 className='destination__travel--title'>EST. TRAVEL TIME</h3>
                    <p className='destination__travel--text'>{destination.travel}</p>
                </div>
            </div>
        </div>
    )
}

export default DestinationInfo