import React from 'react';
import './App.css';
import Counter from './Counter';
import { StoreProvider } from './Store';

function App() {
  return (
    <StoreProvider>
      <div className="App">
        <header className="App-header">
          Learn Mobx
      </header>
        <Counter></Counter>
      </div>
    </StoreProvider>
  );
}

export default App;
