import * as React from 'react';
import './auth.css';
interface Props {
  handleLogin: Function;
}
interface State {
  loginActive: boolean;
}
class Auth extends React.Component <Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      loginActive: true,
    };
  }

  toggleSignup(): void {
    const { loginActive } = this.state;
    this.setState({ loginActive: !loginActive });
  }

  render(): React.ReactFragment {
    const { loginActive } = this.state;
    const { handleLogin } = this.props;

    return (
      <div className="auth-container">
        <div className="form-container">
          <div className="form-email-txt">
            <span>E-mail</span>
          </div>
          <div className="form-email-input">
            <input style={{ height: '25px' }} size={70} type="text" />
          </div>
          <br />
          <div className="form-paswd-txt">
            <span>Password</span>
          </div>
          <div className="form-paswd-input">
            <input style={{ height: '25px' }} size={70} type="password" />
          </div>

        </div>

        <div className="form-btn-container">
          <button type="submit" className="form-btn-login" onClick={(): void => handleLogin()}>
            { loginActive ? 'Login' : 'Signup' }
          </button>
          |
          <button type="button" className="form-btn-switch" onClick={(): void => this.toggleSignup()}>
            Switch to
            {' '}
            { !loginActive ? 'Login' : 'Signup' }
          </button>
        </div>
      </div>
    );
  }
}


export default Auth;
