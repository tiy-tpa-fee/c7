import React, { Component } from 'react'
import cx from 'classnames'
import { observer } from 'mobx-react'
import store from '../utils/store'
import auth from '../utils/auth'

class List extends Component {
  componentDidMount () {
    store.load()
  }

  _submit = (event) => {
    event.preventDefault()
    const input = event.target.todoText
    store.addItem(input.value)
    input.value = ''
  }

  render () {
    return <div className='List'>
      <img src={auth.profile.picture} />
      <h2>{auth.profile.given_name}'s List</h2>
      <ul className='one-list'>
        {store.items.map(({ text, complete }, i) =>
          <li className={cx({ complete })} key={i}>
            <span onClick={() => store.toggle(i)}>{text}</span>
            <button onClick={() => store.delete(i)}>&times;</button>
          </li>
        )}
      </ul>
      <form onSubmit={this._submit}>
        <input type='text' name='todoText' />
      </form>
      <button onClick={() => auth.signOut()}>Sign Out</button>
    </div>
  }
}

export default observer(List)
