import React, { Component } from 'react';
import { Link } from 'react-router';

import RegisterForm from '../components/RegisterForm'

class Register extends Component {
  handleSubmit = (values) => {
    console.log(values);
  }

  render() {
    return (
      <div className="app--register">
        <div className="card-block">
          <RegisterForm onSubmit={this.handleSubmit} />
          <div className="register--switch-view">
            Already have an account? <Link to="/login">Log in</Link> instead.
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
