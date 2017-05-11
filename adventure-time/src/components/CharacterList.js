import React, { Component } from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import styles from '../styles/CharacterList.scss'

class CharacterList extends Component {
  state = {
    characters: []
  }

  _click = () => {
    this.props.history.push('/')
  }

  componentDidMount () {
    window.fetch('https://api.graphcms.com/simple/v1/cj2kguqlg4wzs013019o9nxge', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: `query {
          allCharacters(filter: { isPublished: true }) {
            id
            name
          }
        }`
      })
    })
      .then(res => res.json())
      .then(({ data }) => {
        this.setState({
          characters: data.allCharacters
        })
      })
  }

  render () {
    const characters = this.state.characters.map((character) => {
      const { id, name } = character
      return <li key={id}>
        <NavLink activeClassName={styles.active}
          to={`/characters/${id}`}>
          {name}
        </NavLink>
      </li>
    })

    return <ul className={styles.CharacterList}>
      {characters}
      <li className={styles.home}><button onClick={this._click}>🏠</button></li>
    </ul>
  }
}

export default withRouter(CharacterList)
