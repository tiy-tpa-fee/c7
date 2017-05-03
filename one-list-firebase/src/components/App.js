import React from 'react'
import cx from 'classnames'

class App extends React.Component {
  state = {
    items: []
  }

  addItem (text) {
    this.setState({
      items: [...this.state.items, { text, completed: false }]
    })
  }

  toggle (index) {
    const items = this.state.items.slice()
    items[index].completed = !items[index].completed
    this.setState({ items })
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
          {this.state.items.map(({ text, completed }, i) =>
            <li
              className={cx({ completed })}
              onClick={() => this.toggle(i)}
              children={text}
              key={i}
            />
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
