import React, { Component } from 'react'
import Card from './Card'

class App extends Component {
  state = {
    faces: ['🤖', '🐢', '🐼', '🐙', '👾', '👹', '🐢', '👾', '😱', '🤖', '🐲', '🐙', '😱', '👹', '🐼', '🐲'],
    picks: [],
    matched: []
  }

  choose = (positionOfCard) => {
    const { picks, matched } = this.state
    if (picks.includes(positionOfCard) || matched.includes(positionOfCard)) return
    if (picks.length < 2) {
      this.setState({
        picks: [...picks, positionOfCard]
      }, () => {
        if (this.state.picks.length === 2) {
          this.check()
        }
      })
    }
  }

  check = () => {
    const { faces, picks, matched } = this.state
    if (faces[picks[0]] === faces[picks[1]]) {
      this.setState({
        matched: [...picks, ...matched]
      }, () => {
        if (faces.length === this.state.matched.length) {
          this.gameOver()
        }
      })
    }
    console.log('CHECK!')
    window.setTimeout(() => {
      this.setState({
        picks: []
      })
    }, 2000)
  }

  gameOver = () => {
    window.setTimeout(() => {
      this.setState({
        picks: [],
        matched: []
      })
    }, 2000)
  }

  render () {
    const { faces, picks, matched } = this.state
    const cards = faces.map((face, i) => {
      return <Card
        content={face}
        matched={matched.includes(i)}
        up={picks.includes(i)}
        choose={this.choose}
        position={i}
        key={i}
      />
    })

    return <div className='memroy'>
      <h1>Memroy</h1>
      <div className='box'>
        {cards}
      </div>
    </div>
  }
}

export default App
