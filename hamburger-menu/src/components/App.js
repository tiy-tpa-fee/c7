import React, { Component } from 'react'
import { observer } from 'mobx-react'
import Menu from './Menu'
import Notice from './Notice'
import cx from 'classnames'
import ui from '../ui'

@observer
class App extends Component {
  _clickOK = () => {
    ui.info('Hey, you clicked okay')
  }

  _clickNO = () => {
    ui.warn('A bad thing happens.')
  }

  render () {
    return <div>
      <div className={cx('wrapper', { menu: ui.menuShown })}>
        <nav>
          <ul>
            <li>
              <button onClick={() => ui.toggleMenu()}>
                <i className='fa fa-bars' aria-hidden='true' />
              </button>
            </li>
            <li>
              <h1>Hello, World!</h1>
            </li>
          </ul>
        </nav>
        <main>
          <h2>Some cool content</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <button onClick={this._clickOK}>OK</button>
          <button onClick={this._clickNO}>NO</button>
        </main>
      </div>
      <Menu />
      <Notice />
    </div>
  }
}

export default App
