import React from 'react';
import { connect } from 'react-redux';
import Sessionexpired from '../Sessionexpired';


export default function requireAuthentication(Component) {
    class RequireAuthentication extends React.Component {
        componentWillMount() {
            this.token = localStorage.getItem('token')
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