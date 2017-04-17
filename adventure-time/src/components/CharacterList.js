import React, { Component } from 'react'
import styles from '../styles/CharacterList.scss'
import classNames from 'classnames/bind'
const cx = classNames.bind(styles)

class CharacterList extends Component {
  render () {
    const characters = this.props.characters.map((character) => {
      return <li className={cx({active: this.props.current === character.id})} key={character.id}>{character.name}</li>
    })
    return <ul className={styles.CharacterList}>
      {characters}
    </ul>
  }
}

export default CharacterList
