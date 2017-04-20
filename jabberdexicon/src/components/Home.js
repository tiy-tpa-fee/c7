import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ryanbaby from '../images/ryanbaby.jpg'

class Home extends Component {
  render () {
    return <div className='Home'>
      <img src={ryanbaby} alt='Ryan Baby' height='200' width='300' />

      <h3>Random Entries</h3>

      <ul>
        <li><Link to='/entry/foo'>Foo</Link></li>
        <li><Link to='/entry/talk-to-the-duck'>Talk to the duck</Link></li>
        <li><Link to='/entry/under-the-hood'>Under the hood</Link></li>
        <li><Link to='/entry/hello-world'>Hello, World</Link></li>
      </ul>
    </div>
  }
}

export default Home
