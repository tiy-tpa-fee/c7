class Game {
  board = []

  load (id) {
    // Use the Fetch API to make a GET resquest for a game with the given ID.
    window.fetch('http://minesweeper-api.herokuapp.com/games/' + id)
      // Handle the promised response as JSON
      .then((response) => response.json())
      // Handle the promised JSON data
      .then((data) => {
        // Change our obserbable properties.
        this.board = data.board
      })
  }
}

// Create a single instance of our game class
// and export it. This pattern is often referred
// to as a "singleton"
const game = new Game()
export default game
