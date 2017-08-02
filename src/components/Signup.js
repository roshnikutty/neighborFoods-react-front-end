import React from 'react';
import { Link } from 'react-router-dom';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import './app.css';

const SignUp = (props) => {
    return (
        <div>
            <h1><Link to="/">NeighborFoods</Link></h1>
            <div className="black-box signup">
                <p><input type="text" className="blank" placeholder="User ID" size="35" required /></p>
                <p><input type="password" className="blank" placeholder="Password" size="35" required /></p>
                <p><input type="password" className="blank" placeholder="Retype password" size="35" required /></p>
                <p><input type="text" className="blank" placeholder="Name" size="35" required /></p>
                <p><input type="text" className="blank" placeholder="Email address" size="35" required /></p>

                <button className="signup-login-button" onClick={props.signup}>Sign Up</button>
            </div>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => ({
    signup: () =>  dispatch(push('/viewmeals')) 
})

export default connect(null, mapDispatchToProps)(SignUp)