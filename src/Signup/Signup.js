import React from 'react';
import { Link } from 'react-router-dom';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import { signup } from './action';

const SignUp = (props) => {
    let username, password, firstName, lastName;

    function handleSubmit(e) {
        e.preventDefault();
        console.log(`checking form values ${username.value}, ${password.value}, ${firstName.value}, ${lastName.value}`);
        return props.signup({
            username: username.value,
            password: password.value,
            firstName: firstName.value,
            lastName: lastName.value
        });
    }
    return (
        <div className="signup-form">
            <header>
                <h1><Link to="/">NeighborFoods</Link></h1>
                <button className="page-login-signup-button login-style" onClick={props.gotoLogin} >Log In</button>
            </header>
            <form onSubmit={handleSubmit} id="signup-form">
                <div className="black-box signup">
                    <p><input type="text" ref={(input) => username = input} className="blank" placeholder="User ID" size="35" required /></p>
                    <p><input type="password" ref={(input) => password = input} className="blank" placeholder="Password" size="35" required /></p>
                    <p><input type="text" ref={(input) => firstName = input} className="blank" placeholder="First Name" size="35" required /></p>
                    <p><input type="text" ref={(input) => lastName = input} className="blank" placeholder="Last Name" size="35" required /></p>
                    <p className="signup_button">
                        <button className="signup-login-button" >Sign Up</button>
                    </p>
                </div>
            </form>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => ({
    signup: (attributes) => { dispatch(signup(attributes)) },
    gotoLogin: () => dispatch(push('/login'))
})

export default connect(null, mapDispatchToProps)(SignUp)