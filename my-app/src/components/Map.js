import React from 'react'
import GoogleMapReact from 'google-map-react'
import LocationPin from './LocationPin'
import './Map.scss'

const Map = (props) => {
    return (
        <section className="google-map">
            <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.REACT_APP_API_KEY }}
                defaultCenter={props.location}
                defaultZoom={props.zoomLevel}
            >
                {props.data.map((item, index) =>
                    <LocationPin
                        lat={item.coordinates.latitude}
                        lng={item.coordinates.longitude}
                        text={item.location}
                        value={item.value}
                        key={`maplocation${index}`}
                    />
                )}
            </GoogleMapReact>
        </section>
    )
}

export default Map
