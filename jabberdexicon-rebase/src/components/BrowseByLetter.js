import React from 'react'
import { NavLink } from 'react-router-dom'

const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')

const styles = {
  list: {
    display: 'flex',
    justifyContent: 'space-around',
    listStyle: 'none',
    paddingLeft: '0'
  },

  item: {
    textTransform: 'uppercase'
  }
}

const BrowseByLetter = () =>
  <div className='BrowseByLetter'>
    <ul style={styles.list}>
      {alphabet.map(l =>
        <li key={l} style={styles.item}><NavLink to={`/browse/${l}`}>{l}</NavLink></li>
      )}
      <li><NavLink to='/browse/0'>#</NavLink></li>
    </ul>
  </div>

export default BrowseByLetter
