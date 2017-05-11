import React from 'react'
import { observer } from 'mobx-react'
import cx from 'classnames'
import ui from '../ui'

const Menu = () => (
  <aside className={cx('menu', { hidden: !ui.menuShown })}>
    <header>
      <button onClick={() => ui.toggleMenu()}>
        <i className='fa fa-close' aria-hidden='true' />
      </button>
    </header>
    <section>
      <ul>
        <li>One</li>
        <li>Two</li>
        <li>Three</li>
      </ul>
    </section>
  </aside>
)

export default observer(Menu)
