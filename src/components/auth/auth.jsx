import React from 'react';
import './auth.css';

function Auth() {
  return (
    <div className="auth-container">
      <div className="form-container">
        <div className="form-email-txt">
          <span>E-mail</span>
        </div>
        <div className="form-email-input">
          <input style={{ height: '25px' }} size="70" type="text" />
        </div>
        <div className="form-paswd-txt">
          <span>Password</span>
        </div>
        <div className="form-paswd-input">
          <input style={{ height: '25px' }} size="70" type="text" />
        </div>

      </div>
    </div>
  );
}

export default Auth;
