import React, { Component } from 'react'
import styles from '../styles/CharacterDetails.scss'

class CharacterDetails extends Component {
  render () {
    return <div className={styles.CharacterDetails}>
      <h2 className={styles.title}>Finn the Human</h2>
      <img src='http://i.cdn.turner.com/v5cache/CARTOON/site/Images/i18/propd_at_char_finn.png' alt='Finn the Human' />
      <p>Finn is a silly kid who wants to become a great hero one day. He might not look too tough, but if there's evil around, he'll slay it. That's his deal.</p>
    </div>
  }
}

export default CharacterDetails
