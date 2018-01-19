import React from 'react';
import AnimatedCircles from './AnimatedCircles.js';

class App extends React.Component {
  render () {
    return (
      <header className="Header">
        <h1 className="Logo">unera</h1>
        <a href="#">drop us a line</a>
        <AnimatedCircles />
      </header>
    )
  }
}

export default App;