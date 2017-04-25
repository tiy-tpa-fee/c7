import React from 'react'
import PropTypes from 'prop-types'
import style from './style.sass'

class UnitView extends React.Component {
  static propTypes = {
    unit: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    cost: PropTypes.number.isRequired,
    attack: PropTypes.number.isRequired,
    health: PropTypes.number.isRequired,
    army: PropTypes.object.isRequired,
    addUnit: PropTypes.func.isRequired,
    removeUnit: PropTypes.func.isRequired
  }

  _increment = () => {
    this.props.addUnit(this.props.unit)
  }

  _decrement = () => {
    this.props.removeUnit(this.props.unit)
  }

  render () {
    return <tr className={style.unit}>
      <td className={style.info}>
        <h4>{this.props.name}</h4>
        <p>{this.props.summary}</p>
        <dl>
          <dt>Cost</dt>
          <dd className={style.cost}>{this.props.cost}</dd>
          <dt>Attack</dt>
          <dd className={style.attack}>{this.props.attack}</dd>
          <dt>Health</dt>
          <dd className={style.health}>{this.props.health}</dd>
        </dl>
      </td>
      <td className={style.count}>
        &times;{this.props.army[this.props.unit]}
      </td>
      <td className={style.add}>
        <button onClick={this._increment}>+</button>
      </td>
      <td className={style.remove}>
        <button onClick={this._decrement}>-</button>
      </td>
    </tr>
  }
}

export default UnitView
