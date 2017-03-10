import React, { Component } from 'react';

import RegisterForm from '../components/RegisterForm'

class Register extends Component {
  handleSubmit = (values) => {
    console.log(values);
  }

  render() {
    return (
      <RegisterForm onSubmit={this.handleSubmit} />
    );
  }
}

export default Register;
