import React, { Component } from 'react'
import game from '../game'

const KEYS = {
  81: 'P1_UP',    // Q
  90: 'P1_DOWN',  // Z
  65: 'P1_STOP',  // A
  221: 'P2_UP',   // ]
  191: 'P2_DOWN', // '
  222: 'P2_STOP'  // /
}

class Game extends Component {
  componentDidMount () {
    this.canvas = this.refs.canvas
    this.context = this.canvas.getContext('2d')
    this.canvas.width = game.WIDTH
    this.canvas.height = game.HEIGHT

    window.addEventListener('keyup', (event) => {
      game.inputs[KEYS[event.keyCode]] = false
    })

    window.addEventListener('keydown', (event) => {
      game.inputs[KEYS[event.keyCode]] = true
    })

    game.start()
    this.request = window.requestAnimationFrame(() => this.draw())
  }

  componentWillUnmount () {
    game.stop()
    window.cancelAnimationFrame(this.request)
  }

  draw = () => {
    const { width, height } = this.canvas
    this.context.clearRect(0, 0, width, height)
    const size = game.BALL_SIZE
    const { x, y } = game.ball.position

    this.context.fillStyle = '#999'
    this.context.font = '48px sans-serif'
    this.context.fillText(game.p1.score, 20, height - 20)
    this.context.fillText(game.p2.score, width, height - 20)

    this.context.fillStyle = 'white'
    // Ball
    this.context.fillRect(x - size / 2, y - size / 2, size, size)
    // Player 1
    this.context.fillRect(size, game.p1.position - game.PADDLE_SIZE / 2, size, game.PADDLE_SIZE)
    // Player 2
    this.context.fillRect(width - size * 2, game.p2.position - game.PADDLE_SIZE / 2, size, game.PADDLE_SIZE)
    this.request = window.requestAnimationFrame(() => this.draw())
  }

  render () {
    return <div className='Game'>
      <canvas ref='canvas' />
    </div>
  }
}

export default Game
