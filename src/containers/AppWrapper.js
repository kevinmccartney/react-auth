import React, { Component } from 'react';
import { Router, Route, IndexRedirect, hashHistory } from 'react-router';
import Register from '../pages/Register';

const App = (props) => {
  return (
    <div className="app--wrapper row align-items-center justify-content-center">
      <div className="app--inner">
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
        </Route>
      </Router>
    );
  }
}

export default AppWrapper;
