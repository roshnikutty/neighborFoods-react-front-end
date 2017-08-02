import React from 'react';
import { connect } from 'react-redux'
import { Route, Link, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux'
import { push } from 'react-router-redux';
import { history } from '../store'
import Intro from './Intro';
import SignUp from './Signup';
import LogIn from './Login';

import './app.css';

let Home = (props) => (
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


Home = connect(null, mapDispatchToProps)(Home)

// =====================================================================================================

const App = (props) => {
    return (
        <ConnectedRouter history={history}>
            <Switch>
                <Route
                    exact
                    path="/"
                    component={Home}
                />
                <Route
                    exact
                    path="/login"
                    component={LogIn}
                />
                <Route
                exact
                path="/signup"
                component={SignUp} />
            </ Switch>

        </ConnectedRouter>
    );
}
export default connect()(App)
