import React from 'react'
import { Link } from 'react-router-dom'
import { query } from '../api'

class Locations extends React.Component {
  state = {
    locations: []
  }

  componentDidMount () {
    query(`allLocations {
      name
      slug
    }`).then(({ data }) => {
      this.setState({
        locations: data.allLocations
      })
    })
  }

  render () {
    return <div className='Locations'>
      <h2>Our Locations</h2>
      {this.state.locations.map((location, i) => {
        return <section key={i}>
          <h3><Link to={`/locations/${location.slug}`}>{location.name}</Link></h3>
          <p>{location.address}</p>
        </section>
      })}
    </div>
  }
}
export default Locations
