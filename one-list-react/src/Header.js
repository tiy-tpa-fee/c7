import React, { Component } from 'react'
import logo from './logo.svg';

class Header extends Component {
  render () {
    let heading

    if (Math.random() > 0.5) {
      heading = <h1>Welcome to React</h1>
    } else {
      heading = <h1>Gross React</h1>
    }
    
    return <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      {heading}
    </div>
  }
}

export default Header
