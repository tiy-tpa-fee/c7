import { observable } from 'mobx'

const X = 'x'
const O = 'o'
const _ = ' '

const WINNING_MOVES = [
  [[0, 0], [0, 1], [0, 2]],
  [[1, 0], [1, 1], [1, 2]],
  [[2, 0], [2, 1], [2, 2]],
  [[0, 0], [1, 0], [2, 0]],
  [[0, 1], [1, 1], [2, 1]],
  [[0, 2], [1, 2], [2, 2]],
  [[0, 0], [1, 1], [2, 2]],
  [[0, 2], [1, 1], [2, 0]]
]

class Game {
  @observable board = [
    [_, _, _],
    [_, _, _],
    [_, _, _]
  ]
  @observable currentPlayer = X
  winner = null
  moves = 0

  move (row, col) {
    if (this.board[row][col] === _ && !this.winner) {
      this.board[row][col] = this.currentPlayer
      if (this.checkForWinner()) {
        this.winner = this.currentPlayer
      } else {
        this.currentPlayer = this.currentPlayer === X ? O : X
        this.moves++
      }
    }
  }

  checkForWinner () {
    return WINNING_MOVES.some((moves) => (
      moves.every(([y, x]) => (
        this.board[y][x] === this.currentPlayer
      ))
    ))
  }

  get message () {
    if (!this.winner && this.moves === 9) return 'It&rsquo;s a draw!'
    if (this.winner) return `${this.winner} wins!`
    return `It&rsquo;s ${this.currentPlayer}&rsquo;s turn.`
  }
}

const game = new Game()
export default game

console.log(WINNING_MOVES)
