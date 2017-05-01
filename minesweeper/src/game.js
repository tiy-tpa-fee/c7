import { observable } from 'mobx'

class Game {
  @observable id
  @observable state = 'new'
  @observable mines = 0
  @observable board = []

  load (id) {
    this.api(`/games/${id}`)
  }

  create (diff) {
    this.api(`/games?difficulty=${diff}`, 'POST')
  }

  check (x, y) {
    // /games/42/check?row=1&col=2
    this.api(`/games/${this.id}/check?row=${y}&col=${x}`, 'POST')
  }

  flag (x, y) {
    this.api(`/games/${this.id}/flag?row=${y}&col=${x}`, 'POST')
  }

  api (path, method = 'GET') {
    // Use the Fetch API to make a GET resquest (possibly for a game with the given ID.)
    window.fetch('http://minesweeper-api.herokuapp.com' + path, { method })
      // Handle the promised response as JSON
      .then((response) => response.json())
      // Handle the promised JSON data
      .then((data) => {
        // Change our obserbable properties.
        this.id = data.id
        this.state = data.state
        this.mines = data.mines
        this.board = data.board
      })
  }
}

// Create a single instance of our game class
// and export it. This pattern is often referred
// to as a "singleton"
const game = new Game()
export default game
