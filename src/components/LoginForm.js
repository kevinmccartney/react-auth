import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class renderField extends Component {

  handleFocus() {
    this.setState({
      hasFocus: true
    })
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
      {!meta.pristine && !meta.active && <label className="animated rotateOut">{label}</label>}
        <input {...input} type={type} placeholder={label} className="form-control"/>
      </div>
    );
  }
}

class LoginForm extends Component {

  render() {
    return (
      <div className="register-form">
        <h4 className="text-center">Login</h4>
        <form onSubmit={this.props.handleSubmit}>
          <div className="form-group">
            <Field className="form-control" name="emailUsername" label="email/username" component={renderField} type="text" />
          </div>
          <div className="form-group">
            <Field className="form-control" name="password" label="password" component={renderField} type="password" />
          </div>
          <button className="btn btn-primary" type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

LoginForm = reduxForm({
  form: 'login',
})(LoginForm);

export default LoginForm;
