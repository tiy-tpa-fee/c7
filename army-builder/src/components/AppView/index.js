import React from 'react'
import { UnitListView, SummaryView, ResourcesView } from '..'
import style from './style.sass'

class AppView extends React.Component {
  render () {
    return <div className={style.app}>
      <main>
        <UnitListView />
      </main>
      <aside>
        <ResourcesView />
        <SummaryView />
      </aside>
    </div>
  }
}

export default AppView
