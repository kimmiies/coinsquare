import React, { Component } from 'react';
import Exchange from './exchange/exchange';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Exchange testProps={'hello'}/>
      </div>
    );
  }
}

export default App;
