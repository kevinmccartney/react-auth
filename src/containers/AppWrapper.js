import React, { Component } from 'react';
import { Router, Route, IndexRedirect, hashHistory } from 'react-router';
import Register from '../pages/Register';

const App = (props) => {
  return (
    <div className="AppWrapper">
      <h1>Hello world, this is an app!</h1>
      { props.children }
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
        </Route>
      </Router>
    );
  }
}

export default AppWrapper;
