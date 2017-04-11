import React, { Component } from 'react'
import cx from 'classnames'

class Card extends Component {
  _click = () => {
    this.props.choose(this.props.position)
  }

  render () {
    const { up, matched } = this.props
    return <div className={cx('card', { up, matched })} onClick={this._click}>
      {this.props.content}
    </div>
  }
}

export default Card
