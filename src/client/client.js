// --------> startup point for client side

import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import './client.css';

ReactDOM.hydrate(
  <App {...window.APP_STATE} />,
  document.querySelector('#root')
);
