import * as React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import {Provider} from 'react-redux'
import { store } from './store';


const client = new ApolloClient({
  uri: process.env.PORT || 'http://localhost:8080/graphql',
  cache: new InMemoryCache()
});

ReactDom.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
        <App />
    </Provider>
  </ApolloProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
serviceWorker.register();
