// import logo from './logo.svg';
import './App.css';
import Main from './components/Main';
import * as React from 'react'
import Routes from './Routes'
import {Navbar} from './components'
function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
      <Navbar />

      <Routes />
        {/* <img src={logo} className="App-logo" alt="logo" />
        <Main />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
