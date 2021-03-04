import './App.css';
import * as React from 'react'
import Routes from './Routes'
import {Navbar} from './components'
import {  useQuery } from '@apollo/client';
import { GET_PODCASTS } from './queries'
import {BrowserRouter as Router} from 'react-router-dom'
import history from './history'

function App() {
  const { loading, error, data } = useQuery(GET_PODCASTS);
  if (loading) return <p>Loading ...</p>;
  if(error) return <p>Something has gone wrong</p>
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
