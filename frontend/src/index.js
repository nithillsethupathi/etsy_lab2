import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { legacy_createStore, applyMiddleware, compose } from "@reduxjs/toolkit";
import thunk from 'redux-thunk';
import { reducers } from './reducers';
import { Provider } from 'react-redux';

const store = legacy_createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
  document.getElementById('root')
);
