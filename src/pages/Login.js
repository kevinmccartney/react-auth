import React, { Component } from 'react';
import { Link } from 'react-router';

import LoginForm from '../components/LoginForm'

class Login extends Component {
  handleSubmit = (values) => {
    console.log(values);
  }

  render() {
    return (
      <div className="app--login">
        <div className="card-block">
          <LoginForm onSubmit={this.handleSubmit} />
          <div className="login--switch-view">
            Need an account? <Link to="/register">Sign up</Link> instead.
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
