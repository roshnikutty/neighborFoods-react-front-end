import React from 'react';
import { connect } from 'react-redux';
import Sessionexpired from '../Sessionexpired';
// import { Route, Link, Switch } from 'react-router-dom';
// import { push } from 'react-router-redux';


export default function requireAuthentication(Component) {
    class RequireAuthentication extends React.Component {
        componentWillMount() {
            this.token = localStorage.getItem('token')
            // console.log('!!!!!TOKEN !!!!!', this.token)
        }

        render() {
            return (
                <div>
                    {this.token ? <Component {...this.props} /> : <Sessionexpired />}
                </div>
            )
            
        }
    }

    return connect()(RequireAuthentication)
}