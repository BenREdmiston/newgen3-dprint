import logo from './logo.svg';
import './App.css';

/* function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App; */

import React from 'react';
import CubeLanding from './CubeLanding'; // Import your component

const App = () => {
  const imageURLs = [
    require('./images/GENimg.png'), //front face
    require('./images/3-Dimg.png'),
    require('./images/3-Dimg.png'),
    require('./images/NEWimg.png'),
    require('./images/NEWimg.png'), // top face
    require('./images/3-Dimg.png'),
  ];

  return (
    <div>
      <CubeLanding images={imageURLs}/>
    </div>
  );
};

export default App;
