import React, { useState } from 'react'
import './CardContainer.scss'

const CardContainer = (props) => {

    const [data, setData] = useState(props.data);

    const sortByLocation = () => {
        setData([...data].sort((a, b) => {
            if(a.location < b.location) { return -1; }
            if(a.location > b.location) { return 1; }
            return 0;
        }))
    }

    const sortByAmount = () => {
        setData([...data].sort((a, b) => {
            if(a.value < b.value) { return -1; }
            if(a.value > b.value) { return 1; }
            return 0;
        }))
    }

    const sortByLat = () => {
        setData([...data].sort((a, b) => {
            if(a.coordinates.latitude < b.coordinates.latitude) { return -1; }
            if(a.coordinates.latitude > b.coordinates.latitude) { return 1; }
            return 0;
        }))
    }

    const sortByLong = () => {
        setData([...data].sort((a, b) => {
            if(a.coordinates.longitude < b.coordinates.longitude) { return -1; }
            if(a.coordinates.longitude > b.coordinates.longitude) { return 1; }
            return 0;
        }))
    }


    return (
        <>
            <div className="sortButtons">
                <strong>Sort by:</strong>
                <button onClick={sortByLocation}>Location</button>
                <button onClick={sortByAmount}>Amount</button>
                <button onClick={sortByLat}>Latitude</button>
                <button onClick={sortByLong}>Longitude</button>
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