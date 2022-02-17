import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import Coin from './features/Coin/Coin';
import Theme from './features/theme/Theme';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter />
        <Coin />
        <Theme />
      </header>
    </div>
  );
}

export default App;
