import React, { Component } from 'react'
import MarkdownIt from 'markdown-it'
import styles from '../styles/CharacterDetails.scss'

const md = new MarkdownIt()

class CharacterDetails extends Component {
  state = {
    title: '',
    image: '',
    details: ''
  }

  updateCharacter () {
    const id = this.props.match.params.id
    if (id !== this.state.id) {
      window.fetch(`https://api.graphcms.com/simple/v1/cj2kguqlg4wzs013019o9nxge`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          query: `query {
            Character(id: "${id}") {
              name
              biography
              image {
                url
              }
            }
          }`
        })
      })
      .then(res => res.json())
      .then(({ data }) => {
        const character = data.Character
        this.setState({
          title: character.name,
          details: md.render(character.biography),
          image: character.image.url,
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
      <h3>{this.props.foo}</h3>
      <img src={this.state.image} alt={this.state.name} />
      <div className={styles.biography} dangerouslySetInnerHTML={{__html: this.state.details}} />
    </div>
  }
}

export default CharacterDetails
