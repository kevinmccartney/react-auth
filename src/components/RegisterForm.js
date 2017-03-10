import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class RegisterForm extends Component {
  render() {
    return (
      <div className="register-form">
        <h3>Register</h3>
        <form onSubmit={this.props.handleSubmit}>
          <div>
            <label>First Name</label>
            <Field type="text" name="firstName" component="input" placeholder="first name"/>
          </div>
          <div>
            <label>Last Name</label>
            <Field name="lastName" component="input" type="text" placeholder="last name"/>
          </div>
          <div>
            <label>Email</label>
            <Field name="email" component="input" type="email" placeholder="email"/>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

RegisterForm = reduxForm({
  form: 'register',
})(RegisterForm);

export default RegisterForm;
