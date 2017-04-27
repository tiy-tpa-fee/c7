import React from 'react'
import { PageHeader } from 'rebass'
import { observer } from 'mobx-react'
import WordList from './WordList'
import entries from '../stores/entries'

const SearchResults = ({ match }) =>
  <div className='Browse'>
    <PageHeader
      heading={`Search results for "${match.params.query}"`}
      m={1}
    />
    <WordList entries={entries.search(match.params.query)} />
  </div>

export default observer(SearchResults)
