import React from 'react'
import { UnitListView, SummaryView, ResourcesView } from '..'
import PropTypes from 'prop-types'
import style from './style.sass'

class AppView extends React.Component {
  static propTypes = {
    gold: PropTypes.number.isRequired,
    supply: PropTypes.number.isRequired,
    army: PropTypes.object.isRequired,
    addUnit: PropTypes.func.isRequired,
    removeUnit: PropTypes.func.isRequired
  }

  render () {
    return <div className={style.app}>
      <main>
        <UnitListView
          army={this.props.army}
          addUnit={this.props.addUnit}
          removeUnit={this.props.removeUnit}
        />
      </main>
      <aside>
        <ResourcesView
          army={this.props.army}
          gold={this.props.gold}
          supply={this.props.supply}
        />
        <SummaryView army={this.props.army} />
      </aside>
    </div>
  }
}

export default AppView
