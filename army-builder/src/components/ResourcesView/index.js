import React from 'react'
import { observer } from 'mobx-react'
import store from '../../store'
import style from './style.sass'
import { PanelView } from '..'

@observer
class ResourcesView extends React.Component {
  render () {
    return <PanelView title='Resources' className={style.resources}>
      <ul>
        <li className={style.gold}>{store.gold}</li>
        <li className={style.resources}>{store.supply}</li>
      </ul>
    </PanelView>
  }
}

export default ResourcesView
