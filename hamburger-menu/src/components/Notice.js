import React from 'react'
import cx from 'classnames'
import { observer } from 'mobx-react'
import ui from '../ui'

const Notice = () => {
  if (ui.notice) {
    return <div className='overlay' onClick={() => ui.dismissNotice()}>
      <div className={cx('notice', ui.notice.type)}>
        <button onClick={() => ui.dismissNotice()}>
          <i className='fa fa-close' aria-hidden='true' />
        </button>
        <p>{ui.notice.message}</p>
      </div>
    </div>
  } else {
    return null
  }
}

export default observer(Notice)
