import React, { Component } from 'react';
import { Router, Route, IndexRedirect, hashHistory } from 'react-router';
import Register from '../pages/Register';
import Login from '../pages/Login';

const App = (props) => {
  return (
    <div className="app--wrapper row align-items-center justify-content-center">
      <div className="app--inner card">
        <h1 className="app--title card-title">Hello world, I&apos;m an application.</h1>
        { props.children }
      </div>
    </div>
  );
}

class AppWrapper extends Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRedirect to="/register" />
            <Route path="register" component={Register} />
            <Route path="login" component={Login} />
        </Route>
      </Router>
    );
  }
}

export default AppWrapper;
