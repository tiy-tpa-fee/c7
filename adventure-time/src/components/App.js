import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom'
import CharacterList from './CharacterList'
import CharacterDetails from './CharacterDetails'
import Home from './Home'
import NoMatch404 from './NoMatch404'
import styles from '../styles/App.scss'

class App extends Component {
  render () {
    return <Router>
      <div className={styles.App}>
        <header>
          <h1 className={styles.title}>
            <Link to='/'>Adventure Time</Link>
          </h1>
        </header>
        <section>
          <aside>
            <CharacterList />
          </aside>
          <main>
            <Switch>
              <Route exact path='/' component={Home} />
              {/* An example of how to use `render` to create a Route. */}
              <Route path='/characters/:id' render={(props) => {
                return <CharacterDetails {...props} />
              }} />
              <Router component={NoMatch404} />
            </Switch>
          </main>
        </section>
        <footer>
          <p>&copy; 2017 Cohort 7, except where &copy; Cartoon Network.</p>
        </footer>
      </div>
    </Router>
  }
}

export default App
