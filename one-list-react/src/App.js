import React from 'react'

class App extends React.Component {

  state = {
    plants: []
  }

  _submit = (event) => {
    event.preventDefault()
    this.setState({
      plants: [...this.state.plants, {
        label: this.refs.todoText.value,
        done: false
      }]
    })
    this.refs.todoText.value = ''
  }

  markComplete (index) {
    const newItems = this.state.plants.slice()
    newItems[index].done = !newItems[index].done
    this.setState({ plants: newItems })
  }

  render () {

    const plantItems = this.state.plants.map((plant, i) => {
      return <li
        onClick={() => this.markComplete(i)}
        className={plant.done ? 'completed' : ''}
        key={i}>
        {plant.label}
      </li>
    })

    return <div className="App">
      <header>
        <h1>One List</h1>
      </header>
      <main>
        <ul className="one-list">
          {plantItems}
        </ul>
        <form onSubmit={this._submit}>
          <input type="text" ref="todoText" />
        </form>
      </main>
      <footer>&copy; 2017 Cohort Seven.</footer>
    </div>
  }
}

export default App
