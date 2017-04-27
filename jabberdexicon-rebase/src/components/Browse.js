import React from 'react'
import { PageHeader } from 'rebass'
import { observer } from 'mobx-react'
import WordList from './WordList'
import entries from '../stores/entries'

const Browse = ({ match }) =>
  <div className='Browse'>
    <PageHeader
      heading={match.params.letter.toUpperCase()}
      m={1}
    />
    <WordList entries={entries.filter(match.params.letter)} />
  </div>

export default observer(Browse)
