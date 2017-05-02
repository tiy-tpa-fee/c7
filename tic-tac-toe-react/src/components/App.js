import React, { Component } from 'react'
import { observer } from 'mobx-react'
import game from '../game'

@observer
class App extends Component {
  render () {
    return <div>
      <h1>Tic Tac Toe</h1>
      <table>
        <tbody>
          <tr>
            <td className={game.board[0][0]} onClick={() => game.move(0, 0)} />
            <td className={game.board[0][1]} onClick={() => game.move(0, 1)} />
            <td className={game.board[0][2]} onClick={() => game.move(0, 2)} />
          </tr>
          <tr>
            <td className={game.board[1][0]} onClick={() => game.move(1, 0)} />
            <td className={game.board[1][1]} onClick={() => game.move(1, 1)} />
            <td className={game.board[1][2]} onClick={() => game.move(1, 2)} />
          </tr>
          <tr>
            <td className={game.board[2][0]} onClick={() => game.move(2, 0)} />
            <td className={game.board[2][1]} onClick={() => game.move(2, 1)} />
            <td className={game.board[2][2]} onClick={() => game.move(2, 2)} />
          </tr>
        </tbody>
      </table>
      <h2 dangerouslySetInnerHTML={{__html: game.message}} />
    </div>
  }
}

export default App
