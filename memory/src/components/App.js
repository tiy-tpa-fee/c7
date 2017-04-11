import React, { Component } from 'react'
import Card from './Card'

class App extends Component {
  state = {
    matched: [],
    picks: [],
    faces: ['🤖', '🐢', '🐼', '🐙', '👾', '👹', '🐢', '👾', '😱', '🤖', '🐲', '🐙', '😱', '👹', '🐼', '🐲']
  }

  choose = (positionOfCard) => {
    if (this.state.picks.includes(positionOfCard) || this.state.matched.includes(positionOfCard)) return
    if (this.state.picks.length < 2) {
      this.setState({
        picks: [...this.state.picks, positionOfCard]
      }, () => {
        if (this.state.picks.length === 2) {
          this.check()
        }
      })
    }
  }

  check = () => {
    if (this.state.faces[this.state.picks[0]] === this.state.faces[this.state.picks[1]]) {
      this.setState({
        matched: [...this.state.picks, ...this.state.matched]
      })
      if (this.state.faces.length === this.state.matched.length) {
        this.gameOver()
      }
    }
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
    const cards = this.state.faces.map((face, i) => {
      return <Card content={face} matched={this.state.matched.includes(i)} up={this.state.picks.includes(i)} choose={this.choose} position={i} key={i} />
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
