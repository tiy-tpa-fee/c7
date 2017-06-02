import BEEP_01A from './sounds/beep-01a.wav'
import BEEP_01B from './sounds/beep-01b.wav'
import BEEP_02 from './sounds/beep-02.wav'
import BEEP_03 from './sounds/beep-03.wav'

const INTERVAL = 10
const DECAY = 0.98
const GAIN = 0.2
const MAX_VELOCITY = 3
const MIN_VELOCITY = 1

class Game {
  WIDTH = 640
  HEIGHT = 480
  BALL_SIZE = 8
  PADDLE_SIZE = 92

  inputs = {
    'P1_UP': false,
    'P1_DOWN': false,
    'P1_STOP': false,
    'P2_UP': false,
    'P2_DOWN': false,
    'P2_STOP': false
  }

  ball = {
    position: {
      x: 320,
      y: 240
    },
    velocity: {
      x: 2,
      y: 0.2
    }
  }

  p1 = {
    position: this.HEIGHT / 2,
    velocity: 0,
    score: 0
  }

  p2 = {
    position: this.HEIGHT / 2,
    velocity: 0,
    score: 0
  }

  constructor () {
    this.beep_1a = new window.Audio(BEEP_01A)
    this.beep_1b = new window.Audio(BEEP_01B)
    this.beep_2 = new window.Audio(BEEP_02)
    this.beep_3 = new window.Audio(BEEP_03)
  }

  update () {
    this.ball.position.x += this.ball.velocity.x
    this.ball.position.y += this.ball.velocity.y
    this.p1.position += this.p1.velocity
    this.p2.position += this.p2.velocity

    // Ball bounces of walls on X
    if (this.ball.position.x >= this.WIDTH - this.BALL_SIZE / 2 || this.ball.position.x < this.BALL_SIZE / 2) {
      this.ball.velocity.x = Math.min(MAX_VELOCITY, this.ball.velocity.x * -1)
      this.beep_3.play()
    }

    // Ball bounces of walls on Y
    if (this.ball.position.y >= this.HEIGHT - this.BALL_SIZE / 2 || this.ball.position.y < this.BALL_SIZE / 2) {
      this.ball.velocity.y = Math.min(MAX_VELOCITY, this.ball.velocity.y * -1)
      this.beep_2.play()
    }

    // P1 bounces off walls
    if (this.p1.position <= this.PADDLE_SIZE / 2 || this.p1.position >= this.HEIGHT - this.PADDLE_SIZE / 2) {
      this.p1.velocity *= -1
    }

    // P2 bounces off walls
    if (this.p2.position <= this.PADDLE_SIZE / 2 || this.p2.position >= this.HEIGHT - this.PADDLE_SIZE / 2) {
      this.p2.velocity *= -1
    }

    const topP1 = this.p1.position - this.PADDLE_SIZE / 2
    const bottomP1 = this.p1.position + this.PADDLE_SIZE / 2
    if (this.ball.position.x <= this.BALL_SIZE * 2 &&
        this.ball.position.y >= topP1 &&
        this.ball.position.y <= bottomP1
    ) {
      this.ball.velocity.x = (this.ball.velocity.x + this.p1.velocity) * -1
      this.ball.velocity.y = this.p1.velocity
      this.ball.position.x = this.BALL_SIZE * 2 + this.BALL_SIZE / 2 + 1
      this.beep_1a.play()
    }

    const topP2 = this.p2.position - this.PADDLE_SIZE / 2
    const bottomP2 = this.p2.position + this.PADDLE_SIZE / 2
    if (this.ball.position.x >= this.WIDTH - this.BALL_SIZE * 2 &&
        this.ball.position.y >= topP2 &&
        this.ball.position.y <= bottomP2
    ) {
      this.ball.velocity.x = (this.ball.velocity.x + this.p2.velocity) * -1
      this.ball.velocity.y = this.p2.velocity
      this.ball.position.x = this.WIDTH - this.BALL_SIZE * 2 - this.BALL_SIZE / 2 - 1
      this.beep_1b.play()
    }

    if (this.inputs.P1_UP) {
      this.p1.velocity = Math.min(MAX_VELOCITY * -1, this.p1.velocity - GAIN)
    }

    if (this.inputs.P1_STOP) {
      this.p1.velocity = this.p1.velocity * (1 - GAIN)
    }

    if (this.inputs.P1_DOWN) {
      this.p1.velocity = Math.max(MAX_VELOCITY, this.p1.velocity + GAIN)
    }

    if (this.inputs.P2_UP) {
      this.p2.velocity = Math.min(MAX_VELOCITY * -1, this.p2.velocity - GAIN)
    }

    if (this.inputs.P2_STOP) {
      this.p2.velocity = this.p2.velocity * (1 - GAIN)
    }

    if (this.inputs.P2_DOWN) {
      this.p2.velocity = Math.max(MAX_VELOCITY, this.p2.velocity + GAIN)
    }

    // Decay velocity on the paddle
    this.p1.velocity = this.p1.velocity * DECAY
    this.p2.velocity = this.p2.velocity * DECAY

    // Clamp the ball and paddle positions to the screen
    this.p1.position = Math.max(this.p1.position, this.PADDLE_SIZE / 2)
    this.p1.position = Math.min(this.p1.position, this.HEIGHT - this.PADDLE_SIZE / 2)
    this.p2.position = Math.max(this.p2.position, this.PADDLE_SIZE / 2)
    this.p2.position = Math.min(this.p2.position, this.HEIGHT - this.PADDLE_SIZE / 2)
    this.ball.position.x = Math.max(this.ball.position.x, this.BALL_SIZE / 2)
    this.ball.position.x = Math.min(this.ball.position.x, this.WIDTH - this.BALL_SIZE / 2)
    this.ball.position.y = Math.max(this.ball.position.y, this.BALL_SIZE / 2)
    this.ball.position.y = Math.min(this.ball.position.y, this.HEIGHT - this.BALL_SIZE / 2)

    if (this.ball.velocity.x > 0) {
      this.ball.velocity.x = Math.max(MIN_VELOCITY, this.ball.velocity.x)
    } else {
      this.ball.velocity.x = Math.min(MIN_VELOCITY * -1, this.ball.velocity.x)
    }

    if (this.ball.velocity.y > 0) {
      this.ball.velocity.y = Math.max(MIN_VELOCITY, this.ball.velocity.y)
    } else {
      this.ball.velocity.y = Math.min(MIN_VELOCITY * -1, this.ball.velocity.y)
    }
  }

  start () {
    this.timer = window.setInterval(() => this.update(), INTERVAL)
  }

  stop () {
    window.clearInterval(this.timer)
  }
}

const game = new Game()
export default game
