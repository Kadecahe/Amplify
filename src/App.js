import './App.css';
import React, { useState } from 'react'
import Routes from './Routes'
import {Navbar, Splash} from './components'
import {  useQuery } from '@apollo/client';
import { GET_PODCASTS } from './queries'
import {BrowserRouter as Router} from 'react-router-dom'
import history from './history'

function App() {
  const { loading, error, data } = useQuery(GET_PODCASTS);
  const [isLoading, setIsLoading] = useState(true)

  if (loading) return <Splash />;
  if(error) return <p>Something has gone wrong</p>
  setTimeout(() => {
    setIsLoading(false);
    document.getElementById("body").classList.remove('body-splash');
  }, 2000)
  if(isLoading) return <Splash />
  return (
    <div className="App">
      <Router history={history}>
      <Navbar />
      <Routes podcasts={data.getPodcasts} />
      </Router>

    </div>
  );
}

export default App;
