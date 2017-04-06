import React from 'react'
import List from './List'

class App extends React.Component {

  state = {
    items: [
      { label: 'Learn JavaScript Syntax', done: true },
      { label: 'Learn React', done: false },
    ],
  }

  addItem (newItem) {
    this.setState({
      // items: this.state.items.concat(newItem)
      items: [...this.state.items, { label: newItem, done: false }],
    })
  }

  toggleComplete = (index) => {
    const newItems = this.state.items.slice()
    newItems[index].done = !newItems[index].done
    this.setState({ items: newItems })
  }

  _submit = (event) => {
    event.preventDefault()
    const input = this.refs.todoText
    this.addItem(input.value)
    input.value = ''
  }

  render () {
    return <div className="App">
      <header>
        <h1>One List</h1>
      </header>
      <main>
        <List
          items={this.state.items}
          toggleComplete={this.toggleComplete} />
        <form onSubmit={this._submit}>
          <input type="text" ref="todoText" />
        </form>
      </main>
      <footer>&copy; 2017 Cohort Seven.</footer>
    </div>
  }
}

export default App
