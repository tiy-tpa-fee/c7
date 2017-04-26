import React, { Component } from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import {
  Button,
  InlineForm,
  Footer,
  NavItem,
  Overlay,
  Space,
  Text,
  Toolbar
} from 'rebass'

import Home from './Home'
import NewEntry from './NewEntry'

import theme from './theme'

class App extends Component {
  state = {
    modal: false
  }

  _toggle = () => {
    this.setState({
      modal: !this.state.modal
    })
  }

  static childContextTypes = {
    rebass: React.PropTypes.object
  }

  getChildContext () {
    return {
      rebass: theme
    }
  }

  render () {
    return <Router>
      <div className='App'>
        <Toolbar>
          <NavItem is={Link} to='/'>The Jabberdexicon</NavItem>
          <Space auto />
          <NavItem>
            <InlineForm
              backgroundColor='white'
              buttonLabel='Go'
              label='InlineForm'
              name='inline_form'
            />
          </NavItem>
        </Toolbar>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/browse/a'>
            <h1>TODO</h1>
          </Route>
          <Route path='/entry/:slug'>
            <h1>TODO</h1>
          </Route>
        </Switch>
        <Footer m={1}>
          <Text>Built with &hearts; at The Iron Yard in Saint Petersburg, FL.</Text>
          <Space auto />
          <Button onClick={this._toggle}>Add new Entry</Button>
        </Footer>
        <Overlay open={this.state.modal}>
          <NewEntry onDismiss={this._toggle} />
        </Overlay>
      </div>
    </Router>
  }
}

export default App
