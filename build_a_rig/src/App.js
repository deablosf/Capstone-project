import React from 'react';
import './App.css';
import Cases from './components/Cases';
import Cpu from './components/Cpu';
import MotherBoards from './components/MotherBoards';
import Ram from './components/Ram';
import Storage from './components/Storage';
import VideoCards from './components/VideoCards';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="menu">
          <div>ABOUT</div>
          <div>START</div>
          
        </div>
        <div className="title">BUILD A RIG</div>
      </header>

      <VideoCards />
      <footer>
        
      </footer>
    </div>
  );
}

export default App;
