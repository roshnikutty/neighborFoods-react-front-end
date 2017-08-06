import React from 'react';
import { connect } from 'react-redux';
import { login } from './action';
import { Link } from 'react-router-dom';
import { push } from 'react-router-redux';


const LogIn = (props) => {
    return (
        <div>
            <h1><Link to="/">NeighborFoods</Link></h1>
            <div className="black-box login">
                <p><input type="text" className="blank" placeholder="User ID" size="35" required /></p>
                <p><input type="password" className="blank" placeholder="Password" size="35" required /></p>
                <button className="signup-login-button" onClick={props.login}>Log In</button>
            </div>
        </div>
    );
}
const mapDispatchToProps = (dispatch) => ({
    login: () => {
        dispatch(login());
        dispatch(push('/meals'));
    }
})
export default connect(null, mapDispatchToProps)(LogIn)