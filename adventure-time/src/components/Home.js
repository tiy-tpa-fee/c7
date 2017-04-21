import React, { Component } from 'react'
import styles from '../styles/Home.scss'

class Home extends Component {
  _click = () => {
    this.props.history.push('/characters/1')
  }

  render () {
    return <div className={styles.Home}>
      <h2>Welcome!</h2>
      <img onClick={this._click} src='http://vignette2.wikia.nocookie.net/adventuretimewithfinnandjake/images/4/4d/Adventure_time_by_lanbridge-d4zc6op.jpg/revision/latest?cb=20120818003929' alt='' />
    </div>
  }
}

export default Home
