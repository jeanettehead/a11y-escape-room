import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Intro from './intro';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        Alien Escape
        </header>
        <main>
          <Intro />

        </main>
      </div>
    );
  }
}

export default App;
