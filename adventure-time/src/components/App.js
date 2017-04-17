import React, { Component } from 'react'
import CharacterList from './CharacterList'
import CharacterDetails from './CharacterDetails'
import styles from '../styles/App.scss'

class App extends Component {
  state = {
    characters: [{
      id: 1,
      name: 'Finn the Human'
    },
    {
      id: 2,
      name: 'Jake the Dog'
    }],
    current: 1
  }

  componentDidMount () {
    window.fetch('http://api.adventure-time.surge.sh/characters.json')
      .then((res) => {
        return res.json()
      })
    .then((data) => {
      console.log(data)
    })
  }

  render () {
    console.log(styles)
    return <div className={styles.App}>
      <header>
        <h1 className={styles.title}>Adventure Time</h1>
      </header>
      <section>
        <aside>
          <CharacterList characters={this.state.characters} current={this.state.current} />
        </aside>
        <main>
          <CharacterDetails />
        </main>
      </section>
      <footer>
        <p>&copy; 2017 Cohort 7, except where &copy; Cartoon Network.</p>
      </footer>
    </div>
  }
}

export default App
