import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { push } from 'react-router-redux';
import Intro from './Intro'

//exporting here for testing
export const Home = (props) => (
    <div className="app">
        <header>
            <h1><Link to="/">NeighborFoods</Link></h1>
            <p className="header-buttons">
                <button className="login landing-button" onClick={props.gotoLogin} >Log In</button>
                <button className="landing-button" onClick={props.gotoSignup}>Sign Up</button>
            <span className="demo">Guest Sign in - Username: demo, Password: demo</span>
            </p>
        </header>
        <main>
            <Intro />
        </main>
    </div>
)

const mapDispatchToProps = (dispatch) => ({
    gotoLogin: () => dispatch(push('/login')),
    gotoSignup: () => dispatch(push('/signup'))
})

export default connect(null, mapDispatchToProps)(Home)