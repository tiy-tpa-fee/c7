import React, { Component } from 'react'
import game from '../game'

// Create a mapping of the symbols from the API to
// the class names we want for our styling.
// This is just a plain object, so we can use it like:
//   CLASSNAMES.F     => 'flagged'
//   CLASSNAMES['F']  => 'flagged'
const CLASSNAMES = {
  ' ': 'unrevealed',
  '_': 'empty',
  'F': 'flagged',
  '*': 'bomb',
  '@': 'flagged-bomb',
  '1': 'numbered-1',
  '2': 'numbered-2',
  '3': 'numbered-3',
  '4': 'numbered-4',
  '5': 'numbered-5',
  '6': 'numbered-6',
  '7': 'numbered-7',
  '8': 'numbered-8'
}

class Game extends Component {
  componentDidMount () {
    // Get the ID paramter from the URL (via Router)
    const id = this.props.match.params.id
    game.load(id)
  }

  render () {
    return <div className='Game'>
      <table>
        <tbody>
          {/* Map our array of arrays (aka a two-dimensional array)
            into a table of rows and columns. */}
          {game.board.map((row, y) => (
            <tr key={y}>
              {row.map((col, x) => (
                <td className={CLASSNAMES[col]} key={x} />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  }
}
export default Game
