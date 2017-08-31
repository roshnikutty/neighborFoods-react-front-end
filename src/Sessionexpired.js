import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { push } from 'react-router-redux';
// import Login from './Login';
import './App/app.css';


const Sessionexpired = (props) => {
    return (
        <div>
            <header>
                <h1><Link to="/">NeighborFoods</Link></h1>
            </header>
            <p className="black-box" id="warn">You must log in to continue.</p>
            <p className="buttons-box">
                <button className="landing-button session-button" onClick={props.gotoLogin} >Log In</button>
                <button className="landing-button session-button" onClick={props.gotoSignup}>Sign Up</button>
                {/*<Login />*/}
            </p>
        </div>
    );
}
const mapDispatchToProps = (dispatch) => ({
    gotoLogin: () => dispatch(push('/login')),
    gotoSignup: () => dispatch(push('/signup'))
})

export default connect(null, mapDispatchToProps)(Sessionexpired);