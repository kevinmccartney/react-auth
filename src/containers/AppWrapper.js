import React, { Component } from 'react';
import { Router, Route, IndexRedirect, hashHistory } from 'react-router';
import App from '../components/App';
import Login from '../components/Login';

class AppWrapper extends Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRedirect to="/login" />
            <Route path="login" component={Login} />
        </Route>
      </Router>
    );
  }
}

export default AppWrapper;
