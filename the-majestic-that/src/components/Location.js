import React from 'react'
import MapEmbed from './MapEmbed'
import { query } from '../api'

class Location extends React.Component {
  state = {
    location: null
  }

  componentDidMount () {
    query(`Location(slug: "${this.props.match.params.slug}") {
      name
      hours
      address
      mapLocation
    }`).then(({ data }) => {
      this.setState({
        location: data.Location
      })
    })
  }

  render () {
    const { location } = this.state
    if (location) {
      return <div className='Location'>
        <h2>{location.name}</h2>
        <MapEmbed height={300} width={400} location={location.mapLocation} />
        <p>{location.address}</p>
        <table>
          <tbody>
            {location.hours.map(({ days, hours }) =>
              <tr key={days}>
                <th>{days}</th>
                <td>{hours}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    } else {
      return <div className='Location'>
        <h2>Loading...</h2>
      </div>
    }
  }
}

export default Location
