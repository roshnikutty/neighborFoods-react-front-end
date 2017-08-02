import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, formValueSelector, reset } from 'redux-form';
import { Route, Link, Switch } from 'react-router-dom';
import { ConnectedRouter, push } from 'react-router-redux'
import { history } from '../store';
import ViewExistingMeals from './ViewExistingMeals';

import './app.css';

const validate = values => {
    const errors = {}
    if (!values.buyer_name) {
        errors.buyer_name = 'Required'
    }
    if (!values.buy_plate_count) {
        errors.buy_plate_count = 'Required'
    } else if (isNaN(Number(values.buy_plate_count))) {
        errors.buy_plate_count = 'Must be a number'
    } else if (Number(values.buy_plate_count) <= 0) {
        errors.buy_plate_count = 'You must choose a number greater than 0.'
    }
    if (!values.buy_email_address) {
        errors.buy_email_address = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.buy_email_address)) {
        errors.buy_email_address = 'Invalid email address'
    }
    return errors;
}

let AddBuyer = (props) => {
    const renderField = ({ input, label, type, meta: { touched, error } }) => (
        <div>
            <label>{label}</label>
            <div>
                <input {...input} placeholder={label} type={type} />
                {touched && (error && <span>{error}</span>)}
            </div>
        </div>
    )
    const { handleSubmit, pristine, reset, submitting } = props;
    return (
        <div>
            <h1><Link to="/">NeighborFoods</Link></h1>
            <form className="black-box" onSubmit={handleSubmit} >
                <Field name="buyer_name" className="blank" component={renderField} type="text" label="Buyer's name" />
                <Field name="buy_date" className="blank" component={renderField} type="text" label="Date as mm/dd/yyyy" />
                <Field name="buy_plate_count" className="blank" component={renderField} type="number" label="Number of plates" />
                <Field name="buy_email_address" className="blank" component={renderField} type="email" label="Email address" size="35" />
                <button type="submit" disabled={pristine || submitting}>Get this</button>
            </form >
            <button className="landing-button" onClick={props.searchMoreMeals}>Search for more</button>
        </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
    searchMoreMeals: () => dispatch(push('/viewmeals'))
})


//Decorate with redux-form
AddBuyer = reduxForm({
    form: 'AddBuyerForm',  // a unique identifier for this form
    validate
})(AddBuyer)

// Decorate with connect to read form values
const selector = formValueSelector('AddBuyerForm');
AddBuyer = connect(state => {
    const values = selector(state, 'buyer_name', 'buy_date', 'buy_plate_count', 'buy_email_address');
    return values;
}, mapDispatchToProps)(AddBuyer)

//=====================================================================================================
const AddBuyerPage = (props) => {
    return (
        <ConnectedRouter history={history}>
            <Switch>
                <Route
                    exact path="/addbuyer"
                    component={AddBuyer}
                />
                <Route
                    exact path="/viewmeals"
                    component={ViewExistingMeals}
                />
            </ Switch>
        </ ConnectedRouter>
    );
}

export default connect()(AddBuyerPage)