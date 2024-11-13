import React from 'react';
import './register.css';

function Register() {
    return (
        <div>
        <div className="register-container">
            <div className="register-form-container">
                <div className="register-form-title">Fundo</div>
                <div className="register-form-subtitle">Create your Fundo Account</div>

                <div className="register-form-group">
                    <input type="text" placeholder="First Name*" required />
                    <input type="text" placeholder="Last Name*" required />
                </div>

                <div className="register-form-group-full">
                    <input type="text" placeholder="Username*" required />
                    <div className="register-instructions">You can use letters, numbers & periods</div>
                </div>

                <div className="register-form-group">
                    <input type="password" placeholder="Password*" required />
                    <input type="password" placeholder="Confirm*" required />
                </div>

                <div className="register-form-group-full">
                    <div className="register-instructions">Use 8 or more characters with a mix of letters, numbers & symbols</div>
                </div>

                <div className="register-form-group-btn">
                    <div className="register-link">Sign in instead</div>
                    <button className="register-button">Register</button>
                </div>
            </div>

            <div className="register-image-container">
                <img src="images/google.png"  alt="img is not loaded" />
                <div className="register-image-text">One account. All of Fundo working for you.</div>
            </div>
        </div>
        <footer className='register-footer-cnt'>
        <div className="register-language-selector-cnt">
            <select>
            <option>English (United States)</option>
            <option>Telugu (AP)</option>
            <option>Kannada (Karnataka)</option>
            <option>Hindi (India)</option>
            </select>
        </div>
        <div className="register-footer-links">
            <a href="#">Help</a>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
        </div>
        
        </footer>
        </div>
       
    );
}

export default Register;
