import React from 'react'
import { PageHeader } from 'rebass'
import WordList from './WordList'

const Browse = ({ match }) =>
  <div className='Browse'>
    <PageHeader
      heading={match.params.letter.toUpperCase()}
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

export default Browse
