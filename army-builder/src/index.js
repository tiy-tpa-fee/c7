import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import Redbox from 'redbox-react'

import { AppView } from './components'

import './styles/screen.scss'

const root = document.getElementById('root')

const render = app => {
  ReactDOM.render(
    <AppContainer errorReporter={Redbox}>{app}</AppContainer>,
    root
  )
}

render(<AppView />)

if (module.hot) {
  module.hot.accept('./components/App', () => {
    const NextApp = require('./components/AppView').default
    render(<NextApp />)
  })
}
