import React, { Component } from 'react'

class App extends Component {
  state = {
    counter: 0
  }

  _click = () => {
    this.setState({
      counter: this.state.counter + 1
    })
  }

  render () {
    return <div>
      <h1>{this.state.counter}</h1>
      <button onClick={this._click}>+</button>
    </div>
  }
}

export default App
