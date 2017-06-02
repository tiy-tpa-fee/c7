import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Menu, Game } from '.'

class App extends Component {
  render () {
    return <Router>
      <Switch>
        <Route path='/' exact component={Menu} />
        <Route path='/play' exact component={Game} />
      </Switch>
    </Router>
  }
}

export default App
