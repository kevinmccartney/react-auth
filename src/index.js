import React from 'react';
import ReactDOM from 'react-dom';
import { compose, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import persistState from 'redux-localstorage';
import createLogger from 'redux-logger';
import { Provider } from 'react-redux'

import rootReducer from './reducers';

import AppWrapper from './containers/AppWrapper';

const enhancer = compose(
  composeWithDevTools(),
  persistState(),
  applyMiddleware(createLogger())
);

const store = createStore(rootReducer, enhancer);

ReactDOM.render(
  <Provider store={store}>
    <AppWrapper />
  </Provider>,
  document.getElementById('root')
);
