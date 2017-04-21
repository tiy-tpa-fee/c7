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
    window.fetch('/characters.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          characters: data
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
      <li><button onClick={this._click}>Home</button></li>
    </ul>
  }
}

export default withRouter(CharacterList)
