import React, { Component } from 'react';
import SnakeGame from './snake-game/snake-game';
import './SnakeTetris.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <span>
            Snake Tetris
          </span>
        </header>
        <main className="layout">
          <SnakeGame className="snake-area"></SnakeGame>
          <div className="tetris-area">Tetris area</div>
          <div className="data-area">Data area</div>
        </main>
        {/* <p>
          You have clicked the button {this.props.clicks} times!
        </p>
        <button onClick={this.props.onClick}>Click me!</button> */}
      </div>
    );
  }
}

export default App;
