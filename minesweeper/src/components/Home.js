import React from 'react'
import { Redirect } from 'react-router-dom'
import { observer } from 'mobx-react'
import game from '../game'

// Props for components come in as arguments to a functional
// style component. We can use { destructuring } to pull
// off just the parts we care about.
const Home = ({ history }) => {
  // If the game ID is present, redirect to that game instead of
  // Rendering this component.
  if (game.id) return <Redirect to={`/game/${game.id}`} />

  // Create a new game.
  return <div className='Home'>
    <div className='menu'>
      <button onClick={() => game.create(0)}>Easy</button>
      <button onClick={() => game.create(1)}>Medium</button>
      <button onClick={() => game.create(2)}>Hard</button>
    </div>
  </div>
}

export default observer(Home)
