import React from 'react'
import List from './List'

class App extends React.Component {

  state = {
    items: [],
  }

  // When this react component mounts
  componentDidMount() {
    // the URL to "get" todo items
    const url = 'https://one-list-api.herokuapp.com/items?access_token=tolkien'
    // make an AJAX request to that URL
    window.fetch(url)
      // fetch returns a promsise, which yeilds the "response", we call it 'r'
      // The response has a method json(), that returns another promise
      .then(r => r.json())
      // then JSON is done parsing, the promise will yeild the "data"
      .then(data => {
        // use the data as the state for our items
        this.setState({
          items: data
        })
      })
  }

  addItem (newItem) {
    const url = 'https://one-list-api.herokuapp.com/items?access_token=tolkien'
    window.fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        item: {
          text: newItem
        }
      })
    }).then(r => r.json())
      .then(data => {
        this.setState({
          items: [...this.state.items, data],
        })
    })
  }

  toggleComplete = (index) => {
    // Make a copy of the items
    const newItems = this.state.items.slice()
    const item = newItems[index]
    item.complete = !item.complete
    const url = `https://one-list-api.herokuapp.com/items/${item.id}?access_token=tolkien`
    window.fetch(url, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        item: {
          complete: item.complete
        }
      })
    }).then(() => {
      this.setState({ items: newItems })
    })
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
