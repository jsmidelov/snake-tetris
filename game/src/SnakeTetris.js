import React, { Component } from 'react';
import logo from './logo.svg';
import './SnakeTetris.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <main className="layout">
        <div className="snake-area"></div>
        <div className="tetris-area"></div>
        <div className="data-area"></div>
        </main>
        <p>
          You have clicked the button {this.props.clicks} times!
        </p>
        <button onClick={this.props.onClick}>Click me!</button>
      </div>
    );
  }
}

export default App;
