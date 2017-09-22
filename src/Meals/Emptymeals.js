import React from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
// import { push } from 'react-router-redux';

const Emptymeals = (props) => {
    return (
        <div>
            <p className="black-box" id="warn">You can create new meals by clicking 'Post your dishes'.</p>
        </div>
    );
}


export default connect()(Emptymeals);