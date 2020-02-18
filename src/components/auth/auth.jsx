import React from 'react';
import propTypes from 'prop-types';
import './auth.css';

class Auth extends React.Component {
  constructor() {
    super();
    this.state = {
      loginActive: true,
    };
  }

  toggleSignup() {
    const { loginActive } = this.state;
    this.setState({ loginActive: !loginActive });
  }

  render() {
    const { loginActive } = this.state;
    const { handleLogin } = this.props;

    return (
      <div className="auth-container">
        <div className="form-container">
          <div className="form-email-txt">
            <span>E-mail</span>
          </div>
          <div className="form-email-input">
            <input style={{ height: '25px' }} size="70" type="text" />
          </div>
          <br />
          <div className="form-paswd-txt">
            <span>Password</span>
          </div>
          <div className="form-paswd-input">
            <input style={{ height: '25px' }} size="70" type="password" />
          </div>

        </div>

        <div className="form-btn-container">
          <button type="submit" className="form-btn-login" onClick={handleLogin}>
            { loginActive ? 'Login' : 'Signup' }
          </button>
          |
          <button type="button" className="form-btn-switch" onClick={() => this.toggleSignup()}>
            Switch to
            {' '}
            { !loginActive ? 'Login' : 'Signup' }
          </button>
        </div>
      </div>
    );
  }
}
Auth.defaultProps = {
  handleLogin() {
  },
};
Auth.propTypes = {
  handleLogin: {
    type: propTypes.func,
    required: true,
  },
};

export default Auth;
