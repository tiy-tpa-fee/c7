import React from 'react'
import PropTypes from 'prop-types'
import { PanelView } from '..'
import unitData from '../../units.json'
import style from './style.sass'

class SummaryView extends React.Component {
  static propTypes = {
    army: PropTypes.object.isRequired
  }

  render () {
    const units = Object.keys(this.props.army).filter(unit => this.props.army[unit] > 0)
    let list
    if (units.length > 0) {
      list = <ul>
        {units.map((unit, i) => {
          return <li key={i}>
            {unitData[unit].name}
            <span className={style.count}>
              &times;{this.props.army[unit]}
            </span>
          </li>
        })}
      </ul>
    } else {
      list = <p>No units chosen.</p>
    }
    return <PanelView title='Summary' className={style.summary}>
      {list}
    </PanelView>
  }
}

export default SummaryView
