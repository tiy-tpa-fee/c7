import React, { Component } from 'react';
import Header from './Header'
import Intro from './Intro'
import './App.css';

class App extends Component {
  render() {
    return <div className="App">
      <Header />
      <Intro />
    </div>
  }

  // render() {
  //   let heading
  //
  //   if (false) {
  //     heading = React.createElement('h2', null, "Welcome to React")
  //   } else {
  //     heading = React.createElement('h2', null, "Gross React")
  //   }
  //
  //   return (
  //     React.createElement('div', { className: 'App' }, [
  //       React.createElement('div', { className: 'App-header' }, [
  //         React.createElement('img', { src: logo, className: 'App-logo', alt: 'logo' }),
  //         heading
  //       ]),
  //       React.createElement('p', { className: 'App-intro'}, "To get started, edit src/App.js and save to reload.")
  //     ])
  //   );
  // }
}

export default App;
