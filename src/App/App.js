import React from 'react';
import { connect } from 'react-redux'
import { Route, Link, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Snackbar from 'material-ui/Snackbar';
import RaisedButton from 'material-ui/RaisedButton';
import { hideSnackBar } from './action';
import { history } from '../store'
import SignUp from '../Signup';
import LogIn from '../Login';
import Home from '../Home';
import Meals from '../Meals';
import Newmeal from '../Newmeal';
import Newbuyer from '../Newbuyer';

import './app.css';

const App = (props) => {
    return (
        <ConnectedRouter history={history}>
            <MuiThemeProvider>
                <div>
                    <Snackbar message={props.snackbar} 
                                autoHideDuration={4000} 
                                open={!!props.snackbar} 
                                bodyStyle={{ backgroundColor: 'teal', color: '#ffffff' }}
                                onRequestClose={props.hideSnackBar} />
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
                        <Route
                            exact
                            path="/meals"
                            component={Meals}>
                        </Route>
                        <Route
                            exact
                            path="/meals/new"
                            component={Newmeal}>
                        </Route>
                        <Route
                            exact
                            path="/buyers/new"
                            component={Newbuyer}>
                        </Route>
                    </ Switch>
                </div>
            </MuiThemeProvider>
        </ConnectedRouter>
    );
}

const mapDispatchToProps = (dispatch) => ({
    hideSnackBar: () => { dispatch(hideSnackBar()) }
})

const mapStateToProps = (state) => ({
    snackbar: state.app.snackbar
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
