import React from 'react'
import PropTypes from 'prop-types'
import { PanelView, UnitView } from '..'
import style from './style.sass'
import units from '../../units.json'

class UnitListView extends React.Component {
  static propTypes = {
    army: PropTypes.object.isRequired,
    addUnit: PropTypes.func.isRequired,
    removeUnit: PropTypes.func.isRequired
  }

  render () {
    const unitViews = Object.keys(units).map((key, i) => {
      return <UnitView
        {...units[key]}
        unit={key}
        army={this.props.army}
        addUnit={this.props.addUnit}
        removeUnit={this.props.removeUnit}
        key={i}
      />
    })
    return <PanelView title='Units' className={style.unitList}>
      <table cellSpacing='0'>
        <tbody>
          {unitViews}
        </tbody>
      </table>
    </PanelView>
  }
}

export default UnitListView
