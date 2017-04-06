import React, { Component } from 'react'

class Item extends Component {
  _click = () => {
    console.log('you clicked me')
    this.props.toggleComplete(this.props.index)
  }

  render() {
    const className = this.props.done ? 'completed' : ''
    return <li onClick={this._click} className={className}>
      {this.props.label}
    </li>
  }
}

export default Item
