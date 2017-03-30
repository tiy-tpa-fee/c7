if (process.env.NODE_ENV !== 'production') require('./index.html')
import './styles/screen.scss'

import updateTimes from './updateTimes'

const main = () => {
  setInterval(updateTimes, 1000)
}

document.addEventListener('DOMContentLoaded', main)

// IGNORE PAST THIS

if (module.hot) {
  module.hot.dispose(() => window.location.reload())
  module.hot.accept(err => console.error(err))
}
