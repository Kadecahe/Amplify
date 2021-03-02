import * as React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';

import { ApolloClient, ApolloProvider, InMemoryCache, gql } from '@apollo/client';
import {Provider} from 'react-redux'
import { store } from './store';
import {Router} from 'react-router-dom'
import history from './history'


const client = new ApolloClient({
  uri: 'http://localhost:8080/graphql',
  cache: new InMemoryCache()
});

client
  .query({
    query: gql`
      query {
        getPodcasts{
          id
          name
          description
          source
          audio
          image
          title
        }
      }
    `
  })
  .then(result => console.log(result));


ReactDom.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>
  </ApolloProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
serviceWorker.register();
