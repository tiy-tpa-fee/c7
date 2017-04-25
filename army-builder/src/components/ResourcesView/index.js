import React from 'react'
import PropTypes from 'prop-types'
import style from './style.sass'
import unitData from '../../units.json'
import { PanelView } from '..'

class ResourcesView extends React.Component {
  static propTypes = {
    army: PropTypes.object.isRequired,
    gold: PropTypes.number.isRequired,
    supply: PropTypes.number.isRequired
  }

  get gold () {
    return Object.keys(this.props.army).reduce((gold, unit) => {
      return gold - (this.props.army[unit] * unitData[unit].cost)
    }, this.props.gold)
  }

  get supply () {
    // TODO: DO THIS BETTER
    const keys = Object.keys(this.props.army)
    let units = []
    for (var i = 0; i < keys.length; i++) {
      units.push(this.props.army[keys[i]])
    }
    const total = units.reduce((supply, count) => { return supply + count }, 0)
    return this.props.supply - total
  }

  render () {
    return <PanelView title='Resources' className={style.resources}>
      <ul>
        <li className={style.gold}>{this.gold}</li>
        <li className={style.resources}>{this.supply}</li>
      </ul>
    </PanelView>
  }
}

export default ResourcesView
