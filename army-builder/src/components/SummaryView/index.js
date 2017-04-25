import React from 'react'
import { observer } from 'mobx-react'
import store from '../../store'
import { PanelView } from '..'
import style from './style.sass'

@observer
class SummaryView extends React.Component {
  render () {
    const units = Object.keys(store.army).filter(unit => store.army[unit] > 0)
    let list
    if (units.length > 0) {
      list = <ul>
        {units.map((unit, i) => {
          return <li key={i}>
            {store.info[unit].name}
            <span className={style.count}>
              &times;{store.army[unit]}
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
