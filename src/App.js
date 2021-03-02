// import logo from './logo.svg';
import './App.css';
import Main from './components/Main';
import * as React from 'react'
import Routes from './Routes'
import {Navbar} from './components'
import { ApolloClient, ApolloProvider, InMemoryCache, gql, useQuery } from '@apollo/client';
import { GET_PODCASTS } from './queries'

// client
//   .query({
//     query: gql`
//       query {
//         getPodcasts{
//           id
//           name
//           description
//           source
//           audio
//           image
//           title
//         }
//       }
//     `
//   })
//   .then(result => console.log(result));
function App() {
  const { loading, error, data } = useQuery(GET_PODCASTS);
  if (loading) return <p>Loading ...</p>;
  if(error) return <p>Something has gone wrong</p>
  console.log(data, 'your return')
  return (
    <div className="App">
      {/* <header className="App-header"> */}
      <Navbar />

      <Routes podcasts={data.getPodcasts} />
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
