import React, { Component } from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import { observer } from 'mobx-react'
import {
  Button,
  Footer,
  NavItem,
  Overlay,
  Space,
  Text,
  Toolbar
} from 'rebass'

import Home from './Home'
import NewEntry from './NewEntry'
import BrowseByLetter from './BrowseByLetter'
import Browse from './Browse'
import SearchForm from './SearchForm'
import SearchResults from './SearchResults'
import Entry from './Entry'

import theme from './theme'
import ui from '../stores/ui'
import entries from '../stores/entries'

@observer
class App extends Component {
  _toggle = () => {
    ui.modal = !ui.modal
  }

  static childContextTypes = {
    rebass: React.PropTypes.object
  }

  getChildContext () {
    return {
      rebass: theme
    }
  }

  componentDidMount () {
    entries.loadAll()
  }

  render () {
    return <Router>
      <div className='App'>
        <Toolbar>
          <NavItem is={Link} to='/'>The Jabberdexicon</NavItem>
          <Space auto />
          <NavItem>
            <SearchForm />
          </NavItem>
        </Toolbar>
        <main style={{ maxWidth: '720px', margin: 'auto', padding: '1em' }}>
          <BrowseByLetter />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/browse/:letter' component={Browse} />
            <Route path='/search/:query' component={SearchResults} />
            <Route path='/entry/:slug' component={Entry} />
          </Switch>
          <Footer m={1}>
            <Text>Built with &hearts; at The Iron Yard in Saint Petersburg, FL.</Text>
            <Space auto />
            <Button onClick={this._toggle}>New Entry</Button>
          </Footer>
        </main>
        <Overlay open={ui.modal}>
          <NewEntry onDismiss={this._toggle} />
        </Overlay>
      </div>
    </Router>
  }
}

export default App
