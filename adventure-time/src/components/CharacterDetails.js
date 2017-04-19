import React, { Component } from 'react'
import styles from '../styles/CharacterDetails.scss'

class CharacterDetails extends Component {
  state = {
    title: '',
    image: '',
    details: ''
  }

  updateCharacter () {
    const id = this.props.match.params.id
    if (id !== this.state.id) {
      window.fetch(`/characters/${id}.json`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          ...data,
          id
        })
      })
    }
  }

  componentDidMount () {
    this.updateCharacter()
  }

  componentDidUpdate () {
    this.updateCharacter()
  }

  render () {
    return <div className={styles.CharacterDetails}>
      <h2 className={styles.title}>{this.state.name}</h2>
      <img src={this.state.image} alt={this.state.name} />
      <p>{this.state.details}</p>
    </div>
  }
}

export default CharacterDetails
