import React, { useState } from 'react'
import './CardContainer.scss'

const CardContainer = (props) => {

    const [data, setData] = useState(props.data);

    const sortBy = (key) => {
        setData([...data].sort((a, b) => {
            if(a[key] < b[key]) { return -1; }
            if(a[key] > b[key]) { return 1; }
            return 0;
        }))
    }

    const sortByCoordinates = (key) => {
        setData([...data].sort((a, b) => {
            if(a.coordinates[key] < b.coordinates[key]) { return -1; }
            if(a.coordinates[key] > b.coordinates[key]) { return 1; }
            return 0;
        }))
    }


    return (
        <>
            <div className="sortButtons">
                <strong>Sort by:</strong>
                <button onClick={() => {sortBy('location')}}>Location</button>
                <button onClick={() => {sortBy('value')}}>Amount</button>
                <button onClick={() => {sortByCoordinates('latitude')}}>Latitude</button>
                <button onClick={() => {sortByCoordinates('longitude')}}>Longitude</button>
            </div>
            <section className="CardContainer">
                {data.map((item, index) =>
                    <div
                        className="CardContainer__card"
                        key={`card${index}`}
                    >
                        <p className="CardContainer__location">{item.location}</p>
                        <p className="CardContainer__amount">Amount: {item.value}</p>
                        <p><small>Lat: {item.coordinates.latitude}</small></p>
                        <p><small>Long: {item.coordinates.longitude}</small></p>
                    </div>
                )}
            </section>
        </>
    )
}

export default CardContainer