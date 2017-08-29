import React from 'react';
import { connect } from 'react-redux';
import Login from './Login';
import './App/app.css';


const Sessionexpired = () => {
    return(
        <div>
            <p className="black-box">You must log in to continue.</p>
                <Login />
        </div>
    );

}

export default connect()(Sessionexpired);