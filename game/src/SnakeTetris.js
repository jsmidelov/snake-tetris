import React, { Component } from 'react';
import logo from './logo.svg';
import './SnakeTetris.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            You have clicked the button {this.props.clicks} times!
          </p>
          <button onClick={this.props.onClick}>Click me!</button>
        </header>
      </div>
    );
  }
}

export default App;
