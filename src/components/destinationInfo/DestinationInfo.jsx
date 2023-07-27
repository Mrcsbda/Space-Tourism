import React from 'react'

const DestinationInfo = ({ destination }) => {
    return (
        <div>
            <h1>{destination.name}</h1>
            <p>{destination.description}</p>
            <div>
                <div>
                    <h3>AVG. DISTANCE</h3>
                    <p>{destination.distance}</p>
                </div>
                <div>
                    <h3>EST. TRAVEL TIME</h3>
                    <p>{destination.travel}</p>
                </div>
            </div>
        </div>
    )
}

export default DestinationInfo