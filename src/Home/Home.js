import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { push } from 'react-router-redux';
import Intro from './Intro'

const Home = (props) => (
    <div className="app">
        <header>
            <button className="landing-button login-style" onClick={props.gotoLogin} >Log In</button>
            <button className="landing-button" onClick={props.gotoSignup}>Sign Up</button>
            <h1><Link to="/">NeighborFoods</Link></h1>
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