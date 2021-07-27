import React from 'react'
import './LocationPin.scss'

const LocationPin = ({ text, value }) => (
  <div className="locationPin">
    <p className="locationPin__text">{text}</p>
    <p className="locationPin__value">{value}</p>
  </div>
)

export default LocationPin