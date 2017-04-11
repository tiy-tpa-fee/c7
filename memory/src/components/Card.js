import React, { Component } from 'react'

class Card extends Component {
  _click = () => {
    this.props.choose(this.props.position)
  }

  render () {
    let toggle = this.props.up ? 'up' : 'down'
    let matched = this.props.matched ? 'matched' : ''
    return <div className={`card ${toggle} ${matched}`} onClick={this._click}>
      {this.props.content}
    </div>
  }
}

export default Card
