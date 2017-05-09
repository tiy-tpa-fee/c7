import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import { Home, Menu, Contact, Locations, Location } from '.'

class App extends Component {
  render () {
    return <Router>
      <div className='layout'>
        <h1><Link to='/'>The Majestic That</Link></h1>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/menu'>Menu</Link>
            </li>
            <li>
              <Link to='/contact'>Contact Us</Link>
            </li>
            <li>
              <Link to='/locations'>Locations</Link>
            </li>
            <li>
              <Link to='/orders'>Order Online!</Link>
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
