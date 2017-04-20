import React from 'react'

const Entry = ({ term, definition }) => (
  <div>
    <h2>{term}</h2>

    <div className='definition'>
      {definition}
    </div>
  </div>
)
export default Entry
