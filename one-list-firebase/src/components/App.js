import React from 'react'
import cx from 'classnames'
import _ from 'lodash'
import db from '../db'

class App extends React.Component {
  state = {
    items: {}
  }

  componentDidMount () {
    db.ref('items').on('value', (snapshot) => {
      this.setState({
        items: snapshot.val()
      })
    })
  }

  addItem (text) {
    db.ref('items').push().set({ text, completed: false })
  }

  toggle (id) {
    const completed = !this.state.items[id].completed
    db.ref(`items/${id}`).update({ completed })
  }

  delete (id) {
    db.ref(`items/${id}`).remove()
  }

  _submit = (event) => {
    event.preventDefault()
    const input = this.refs.todoText
    this.addItem(input.value)
    input.value = ''
  }

  render () {
    return <div className='App'>
      <header>
        <h1>One List</h1>
      </header>
      <main>
        <ul className='one-list'>
          {_.map(this.state.items, ({ completed, text }, key) =>
            <li className={cx({ completed })} key={key}>
              <span onClick={() => this.toggle(key)}>{text}</span>
              <button onClick={() => this.delete(key)}>&times;</button>
            </li>
          )}
        </ul>
        <form onSubmit={this._submit}>
          <input type='text' ref='todoText' />
        </form>
      </main>
      <footer>&copy; 2017 Cohort Seven.</footer>
    </div>
  }
}

export default App
