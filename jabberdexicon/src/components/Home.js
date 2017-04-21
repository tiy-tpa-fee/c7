import React from 'react'
import _ from 'lodash'
import EntryList from './EntryList'
import ryanbaby from '../images/ryanbaby.jpg'

const Home = ({ entries }) => (
  <div className='Home'>
    <img src={ryanbaby} alt='Ryan Baby' height='200' width='300' />

    <h3>Random Entries</h3>

    <div className='random'>
      <EntryList entries={_.sampleSize(entries, 4)} />
    </div>
  </div>
)

export default Home
