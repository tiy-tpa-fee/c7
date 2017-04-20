import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Link,
  Route
} from 'react-router-dom'
import Home from './Home'
import Entry from './Entry'

class App extends Component {
  render () {
    return <Router>
      <div>
        <h1><Link to='/'>The Jabberdexicon</Link></h1>

        <ul>
          <li><a href='/browse/0'>#</a></li>
          <li><a href='/browse/a'>A</a></li>
          <li><a href='/browse/b'>B</a></li>
          <li><a href='/browse/c'>C</a></li>
          <li>...</li>
        </ul>

        <form action='#'>
          <input type='search' />
        </form>

        <Route exact path='/' component={Home} />
        <Route path='/entry/:slug' render={(props) => (
          <Entry term='Foo' definition='Lorem ipsum' {...props} />
        )} />

        <button>Add an Entry</button>
      </div>
    </Router>
  }
}

export default App
