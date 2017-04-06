import React, { Component } from 'react'
import Item from './Item'

class List extends Component {

  render () {
    const items = this.props.items.map((item, i) => {
      return <Item
        label={item.label}
        done={item.done}
        toggleComplete={this.props.toggleComplete}
        index={i}
        key={i} />
    })
    return <ul className='one-list'>
      {items}
    </ul>
  }
}

export default List
