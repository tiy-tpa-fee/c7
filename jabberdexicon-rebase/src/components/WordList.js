import React from 'react'
import { Link } from 'react-router-dom'

const WordList = ({ entries }) =>
  <ul className='WordList'>
    {entries.map(entry =>
      <li key={entry.id}>
        <Link to={`/entry/${entry.slug}`}>
          {entry.term}
        </Link>
      </li>
    )}
  </ul>

export default WordList
