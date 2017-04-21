import React from 'react'
import EntryList from './EntryList'

const Browse = ({ entries, match }) => (
  <div className='Browse'>
    <h2>{match.params.to}</h2>
    <EntryList entries={entries.filter((entry) => {
      const letter = entry.term[0].toLowerCase()
      if (match.params.to === '0') {
        return letter.match(/[^a-z]/)
      } else {
        return letter === match.params.to
      }
    })} />
  </div>
)

export default Browse
