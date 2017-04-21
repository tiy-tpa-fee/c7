import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Link,
  NavLink,
  Route
} from 'react-router-dom'
import Home from './Home'
import Entry from './Entry'
import Browse from './Browse'
import NewEntry from './NewEntry'
import Search from './Search'
import SearchForm from './SearchForm'
import { get } from '../api'

const ALPHABET = 'abcdefghijklmnopqrstuvwxyz'.split('')

class App extends Component {
  state = {
    entries: []
  }

  componentDidMount () {
    get('/entries').then((entries) => {
      this.setState({ entries })
    })
  }

  render () {
    return <Router>
      <div className='App'>
        <header>
          <h1><Link to='/'>The Jabberdexicon</Link></h1>
          <SearchForm />
        </header>
        <nav>
          <ul>
            {ALPHABET.map((l) => (
              <li key={l}>
                <NavLink to={`/browse/${l}`}>{l}</NavLink>
              </li>
            ))}
            <li><NavLink to='/browse/0'>#</NavLink></li>
          </ul>
        </nav>
        <main>
          <Route exact path='/' render={(props) => (
            <Home entries={this.state.entries} {...props} />
          )} />
          <Route exact path='/browse/:to' render={(props) => (
            <Browse entries={this.state.entries} {...props} />
          )} />
          <Route path='/entry/:slug' component={Entry} />
          <Route path='/search/:query' component={Search} />
          <Route path='/new' component={NewEntry} />
        </main>
        <footer>
          <Link to='/new'>Add an Entry</Link>

          <p>Made with &hearts; at The Iron Yard in St Petersburg, FL.</p>
        </footer>
      </div>
    </Router>
  }
}

export default App
