import React, { Component } from 'react';

import RegisterForm from '../components/RegisterForm'

class Register extends Component {
  handleSubmit = (values) => {
    console.log(values);
  }

  render() {
    return (
      <div className="app--register">
        <h1 className="register--cta">Hello world, this is an app!</h1>
        <RegisterForm onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default Register;
