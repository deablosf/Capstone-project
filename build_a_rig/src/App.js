import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Cases from './components/Cases';
import Cpu from './components/Cpu';
import MotherBoards from './components/MotherBoards';
import Ram from './components/Ram';
import Storage from './components/Storage';
import VideoCards from './components/VideoCards';
import Build from './components/Build';


function App() {
  return (
    <div className="App">
      <Router>
        <div>
        <header className="App-header">
          <div className="menu">
            <div><Link to="">B-a-R</Link></div>
            <div><Link to="case">Cases</Link></div>
            <div><Link to="boards">MotherBoards</Link></div>
            <div><Link to="cpu">CPUs</Link></div>
            <div><Link to="ram">RAM</Link></div>
            <div><Link to="storage">STORAGE</Link></div>
            <div><Link to="video">VID Cards</Link></div>
            <div><Link to="build">BUILD!</Link></div>
          </div>
        
        </header>

        <div className="welcome"> 
        <div className="title">BUILD A RIG</div>
      </div>
        
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL.  */}
         <Switch>
          <Route path="/case">
            <Cases />
          </Route>
          <Route path="/boards">
            <MotherBoards />
          </Route>
          <Route path="/cpu">
            <Cpu />
            <Route path="/ram">
            <Ram />
          </Route>
          <Route path="/storage">
            <Storage />
          </Route>
          <Route path="/video">
            <VideoCards />
            <Route path="/build">
              <Build />
            </Route>
          </Route>
          </Route>
        </Switch> 
        </div>
      </Router>
      


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
