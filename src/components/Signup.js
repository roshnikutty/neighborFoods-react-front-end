import React from 'react';
import './app.css'

export default function SignUp() {
    return (
        <div className="black-box signup">
            <p><input type="text" className="blank" placeholder="User ID" size="35" required/></p>
            <p><input type="password" className="blank" placeholder="Password" size="35" required/></p>
            <p><input type="password" className="blank" placeholder="Retype password" size="35" required/></p>
            <p><input type="text" className="blank" placeholder="Name"  size="35" required/></p>
            <p><input type="text" className="blank" placeholder="Email address"  size="35" required/></p>

            <button className="signup-login-button">Sign Up</button>
        </div>
            );
}