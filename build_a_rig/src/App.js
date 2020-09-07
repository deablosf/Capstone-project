import React from 'react';
import './App.css';
import Cases from './components/Cases';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="menu">
          <div>ABOUT</div>
          <div>START</div>
          <Cases />
        </div>
        <div className="title">BUILD A RIG</div>
      </header>
    </div>
  );
}

export default App;
