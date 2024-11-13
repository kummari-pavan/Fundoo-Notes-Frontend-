import React from 'react';
import './login.css';

function Login() {
  return (
    <div className="login-container">
      <div className="login-form-container">
        <h1 className="login-form-title">Fundo</h1>
        <h2 className="login-form-sub-title">Sign In</h2>
        <p className="login-form-subtitle">Use your Fundo Account</p>

        <div className="login-form-group-full">
          <input type="text" placeholder="Email or Username*" required />
        </div>

        <div className="login-form-group-full">
          <input type="password" placeholder="Password" required />
          <a href="#" className="login-pass-link">Forgot Password?</a>
        </div>

        <div className="login-form-group-btn">
          <a href="#" className="login-create-link">Create Account</a>
          <button className="login-button">Login</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
