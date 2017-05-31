import React from 'react'
import { render } from 'react-dom'
import App from './components/App'

import './styles/screen.scss'

const root = document.getElementById('root')

render(<App />, root)

const replace = () => import('./components/App')
  .then(module => {
    const NextApp = module.default
    render(<NextApp />, root)
  })

if (module.hot) {
  module.hot.accept('./components/App', replace)
}
