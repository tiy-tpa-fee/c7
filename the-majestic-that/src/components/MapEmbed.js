import React from 'react'

const API_KEY = 'AIzaSyDJUtr1QqgprFpOaXpg6xYbalKopPPAzMo'

const MapEmbed = ({ width, height, location }) => (
  <iframe
    src={`https://www.google.com/maps/embed/v1/place?q=place_id:${location}&key=${API_KEY}`}
    width={width}
    height={height}
    frameBorder='0'
    style={{ border: 0 }}
    allowFullScreen
  />
)

export default MapEmbed
