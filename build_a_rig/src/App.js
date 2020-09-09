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
          <div>B-a-R</div>
          <div>Cases</div>
          <div>MotherBoards</div>
          <div>CPUs</div>
          <div>RAM</div>
          <div>STORAGE</div>
          <div>VID Cards</div>
          <div>BUILD!</div>
        </div>
       
      </header>

      <div className="welcome"> 
        <div className="title">BUILD A RIG</div>
        <div className="welTitle"><h1>WELCOME</h1></div>
        <div className="text"><p>Welcome to build a Rig, a site to help computer enthuseists build the computers they desire. This site helps by alllowing youto see whither the parts you want are compatable with eachother.</p></div>
      </div>


      {/* <Cases />
      <MotherBoards />
      <Cpu />
      <Ram />
      <VideoCards />
      <Storage /> */}
      <footer>
        <div className="credits">
          Built in a Rush by <span>Sam Carter</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
