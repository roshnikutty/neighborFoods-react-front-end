import React from 'react';
import { connect } from 'react-redux' 
import { login } from '../actions'
import './app.css'

const LogIn = (props) => {
    return(
        <div className="black-box login">
            <p><input type="text" className="blank" placeholder="User ID" size="35" required/></p>
            <p><input type="password" className="blank" placeholder="Password"  size="35" required/></p>
            <button className="signup-login-button" onClick={props.login}>Log In</button>
        </div>
    );
}
const mapDispatchToProps = (dispatch) => ({
    login: () => dispatch(login())
})
export default connect(null, mapDispatchToProps)(LogIn)