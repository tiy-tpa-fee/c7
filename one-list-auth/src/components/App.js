import React from 'react'
import { observer } from 'mobx-react'
import List from './List'
import Home from './Home'
import auth from '../utils/auth'

const App = () => (
  <div className='App'>
    <header>
      <h1>One List</h1>
    </header>
    <main>
      {auth.isSignedIn ? <List /> : <Home />}
    </main>
    <footer>&copy; 2017 Cohort Seven.</footer>
  </div>
)

export default observer(App)
