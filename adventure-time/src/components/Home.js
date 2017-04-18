import React, { Component } from 'react'
import styles from '../styles/Home.scss'

class Home extends Component {
  render () {
    return <div className={styles.Home}>
      <h2>Welcome!</h2>
      <img src='http://vignette2.wikia.nocookie.net/adventuretimewithfinnandjake/images/4/4d/Adventure_time_by_lanbridge-d4zc6op.jpg/revision/latest?cb=20120818003929' alt='' />
    </div>
  }
}

export default Home
