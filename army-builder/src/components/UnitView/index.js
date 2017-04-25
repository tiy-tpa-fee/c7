import React from 'react'
import { observer } from 'mobx-react'
import store from '../../store'
import PropTypes from 'prop-types'
import style from './style.sass'

@observer
class UnitView extends React.Component {
  static propTypes = {
    unit: PropTypes.string.isRequired
  }

  _increment = () => {
    store.addUnit(this.props.unit)
  }

  _decrement = () => {
    store.removeUnit(this.props.unit)
  }

  render () {
    const { unit } = this.props
    const info = store.info[unit]
    return <tr className={style.unit}>
      <td className={style.info}>
        <h4>{info.name}</h4>
        <p>{info.summary}</p>
        <dl>
          <dt>Cost</dt>
          <dd className={style.cost}>{info.cost}</dd>
          <dt>Attack</dt>
          <dd className={style.attack}>{info.attack}</dd>
          <dt>Health</dt>
          <dd className={style.health}>{info.health}</dd>
        </dl>
      </td>
      <td className={style.count}>
        &times;{store.army[unit]}
      </td>
      <td className={style.add}>
        <button onClick={this._increment} disabled={!store.canAdd(unit)}>+</button>
      </td>
      <td className={style.remove}>
        <button onClick={this._decrement} disabled={!store.canRemove(unit)}>-</button>
      </td>
    </tr>
  }
}

export default UnitView
