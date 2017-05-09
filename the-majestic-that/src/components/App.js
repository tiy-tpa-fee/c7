import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, NavLink, Switch } from 'react-router-dom'

import { Contact, Home, Menu, Location, Locations } from '.'

class App extends Component {
  render () {
    return <Router>
      <div className='App'>
        <h1><Link to='/'>The Majestic That</Link></h1>
        <nav>
          <ul>
            <li>
              <NavLink to='/' exact>Home</NavLink>
            </li>
            <li>
              <NavLink to='/menu'>Menu</NavLink>
            </li>
            <li>
              <NavLink to='/contact'>Contact Us</NavLink>
            </li>
            <li>
              <NavLink to='/locations'>Locations</NavLink>
            </li>
          </ul>
        </nav>
        <main>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/menu' component={Menu} />
            <Route path='/contact' component={Contact} />
            <Route path='/locations' component={Locations} />
            <Route path='/locations/:slug' component={Location} />
          </Switch>
        </main>
        <footer>
          <p>&copy; 2017 The Majestic That.<br />Built with &hearts; at The Iron Yard, in St Petersburg, Florida.</p>
        </footer>
      </div>
    </Router>
  }
}

export default App
