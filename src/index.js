import React from 'react';
import ReactDOM from 'react-dom';
import { compose, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import persistState from 'redux-localstorage';
import { Provider } from 'react-redux'

import rootReducer from './reducers';

import AppWrapper from './containers/AppWrapper';

const enhancer = compose(
  composeWithDevTools()
  // persistState()
);

const store = createStore(rootReducer, enhancer);

ReactDOM.render(
  <Provider store={store}>
    <AppWrapper />
  </Provider>,
  document.getElementById('root')
);
