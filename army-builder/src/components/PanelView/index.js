import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import style from './style.sass'

class PanelView extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    className: PropTypes.string,
    children: PropTypes.element
  }

  render () {
    return <div className={cx(style.panel, this.props.className)}>
      <h3>{this.props.title}</h3>
      <div className={style.content} children={this.props.children} />
    </div>
  }
}

export default PanelView
