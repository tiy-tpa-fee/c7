import React from 'react'

// Props for components come in as arguments to a functional
// style component. We can use { destructuring } to pull
// off just the parts we care about.
const Home = ({ history }) => {
  const _click = () => {
    history.push('/game/42')
  }

  return <div className='Home'>
    <div className='menu'>
      <button onClick={_click}>Easy</button>
      <button onClick={_click}>Medium</button>
      <button onClick={_click}>Hard</button>
    </div>
  </div>
}

export default Home
