import React from 'react'
import { PageHeader } from 'rebass'
import WordList from './WordList'

const SearchResults = ({ match }) =>
  <div className='Browse'>
    <PageHeader
      heading={`Search results for "${match.params.query}"`}
      m={1}
    />
    <WordList entries={[{
      id: 1,
      term: 'Yoda Conditions',
      slug: '1-yoda-conditions'
    }, {
      id: 2,
      term: 'Foo',
      slug: '2-foo'
    }]} />
  </div>

export default SearchResults
