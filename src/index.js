import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ApolloProvider } from '@apollo/client/react'
import { arstyProdApi } from './api/base-api'



ReactDOM.render(
  <ApolloProvider client={arstyProdApi}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
