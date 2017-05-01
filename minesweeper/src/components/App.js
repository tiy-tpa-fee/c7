import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './Home'
import Game from './Game'

class App extends Component {
  render () {
    return <Router>
      <div className='App'>
        <h1>Minesweeper!</h1>
        <main>
          {/* Switch prevents the router from rendering
            multiple routes. Only the first matched route
            will be used. */}
          <Switch>
            {/* Route matches a path to your URL in the
              address bar and if it matches, we'll render
              a component */}
            <Route path='/' exact component={Home} />
            <Route path='/game/:id' component={Game} />
          </Switch>
        </main>
      </div>
    </Router>
  }
}

export default App
