import React from 'react';
import { connect } from 'react-redux';
import { login } from './action';
import { Link } from 'react-router-dom';
import { push } from 'react-router-redux';


const LogIn = (props) => {
    let username, password;
    function handleSubmit(e) {
        e.preventDefault();
    console.log(`INSIDE HANDLESUBMIT--- ${username.value}, ${password.value}`);
        return props.login({
            username: username.value,
            password: password.value
        });
    }

    return (
        <div>
            <h1><Link to="/">NeighborFoods</Link></h1>
            <header>
                <button className="page-login-signup-button" onClick={props.gotoSignup}>Sign Up</button>
            </header>
            <form onSubmit={handleSubmit} id="login-form">
                <div className="black-box login">
                    <p><input type="text" ref={(input) => username = input} className="blank" placeholder="User ID" size="35" required /></p>
                    <p><input type="password" ref={(input) => password = input} className="blank" placeholder="Password" size="35" required /></p>
                    <button className="signup-login-button" >Log In</button>
                </div>
            </form>
        </div>
    );
}
const mapDispatchToProps = (dispatch) => ({
    login: (attributes) => {dispatch(login(attributes))},
    gotoSignup: () => dispatch(push('/signup'))
})
export default connect(null, mapDispatchToProps)(LogIn)