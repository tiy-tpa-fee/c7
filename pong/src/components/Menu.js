import React, { Component } from 'react'

class Menu extends Component {
  onePlayer = () => {
  }

  twoPlayers = () => {
    this.props.history.push('/play')
  }

  render () {
    return <div className='Menu'>
      <h1>Ping Pong</h1>

      <nav>
        <button onClick={this.onePlayer} disabled>1 Player</button>
        <button onClick={this.twoPlayers}>2 Players</button>
      </nav>
    </div>
  }
}

export default Menu
