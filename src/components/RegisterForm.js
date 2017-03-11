import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class renderField extends Component {

  handleFocus() {
    this.setState({
      hasFocus: true
    })
  }

  handleBlur() {

  }

  handleChange() {

  }

  render() {
    const {
      type,
      meta,
      label,
      input
    } = this.props;

    return (
      <div>
      {!meta.pristine && meta.active && <label className="animated rotateIn">{label}</label>}
        <input {...input} type={type} placeholder={label} className="form-control"/>
      </div>
    );
  }
}

class RegisterForm extends Component {

  render() {
    return (
      <div className="register-form">
        <h4 className="text-center">Register</h4>
        <form onSubmit={this.props.handleSubmit}>
          <div className="form-group">
            <Field className="form-control" name="email" label="email" component={renderField} type="email" />
          </div>
          <div className="form-group">
            <Field className="form-control" name="userName" label="user name" component={renderField} type="text" />
          </div>
          <div className="form-group">
            <Field className="form-control" name="password" label="password" component={renderField} type="text" />
          </div>
          <div className="form-group">
            <Field className="form-control" name="firstName" label="first name" component={renderField} type="text"/>
          </div>
          <div className="form-group">
            <Field className="form-control" name="lastName" label="last name" component={renderField} type="text" />
          </div>
          <button className="btn btn-primary" type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

RegisterForm = reduxForm({
  form: 'register',
})(RegisterForm);

export default RegisterForm;
