import { useState } from 'react'

export default function Seperate(travel){
    return(
         <section className="journal">
            <img src={travel.imageUrl} />
            <div className="loc">
                <div className="info">
                    <p className="location">{travel.location}</p>
                    <a href={travel.googleMapsUrl} target="_blank" rel="noopener noreferrer">
                        View on Google Maps
                    </a>
                </div>
                <div className="descrip">
                    <h1>{travel.title}</h1>
                    <p className="date">{travel.startDate} - {travel.endDate}</p>
                    <p className="text">{travel.description}</p>
                </div>
            </div>
        </section>
    )
};