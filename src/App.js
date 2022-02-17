import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Coin from './features/Coin/Coin';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter />
        <Coin />
      </header>
    </div>
  );
}

export default App;
