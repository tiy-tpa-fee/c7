import React from 'react'
import { Link } from 'react-router-dom'
import data from '../data.json'

const Locations = () => (
  <div className='Locations'>
    <h2>Our Locations</h2>
    {data.locations.map((location, i) => {
      return <section key={i}>
        <h3><Link to={`/locations/${location.slug}`}>{location.name}</Link></h3>
        <p>{location.address}</p>
      </section>
    })}
  </div>
)

export default Locations
