import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, formValueSelector, reset } from 'redux-form';
import { Route, Link, Switch } from 'react-router-dom';
import { ConnectedRouter, push } from 'react-router-redux'
import { history } from '../store';
import {createBuyer} from './action';

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

let Newbuyer = (props) => {
    const renderField = ({ input, label, type, meta: { touched, error } }) => (
            <div className="each-input">
                <input {...input} placeholder={label} type={type} className="blank large-line-height"/>
                {touched && (error && <span>{error}</span>)}
            </div>
    )
    const { handleSubmit, pristine, reset, submitting } = props;

    const handleChange = (e) => {
        e.preventDefault();
        console.log("field value", e.target.value);
    }
    return (
        <div>
            <h1><Link to="/">NeighborFoods</Link></h1>
            <form className="black-box" onSubmit={handleSubmit(createBuyer)} id="new-buyer-style">
                <Field name="buyer_name" onChange={handleChange} className="blank" component={renderField} type="text" label="Buyer's name   *" />
                <Field name="buy_date" onChange={handleChange} className="blank" component={renderField} type="text" label="Date as mm/dd/yyyy" />
                <Field name="buy_plate_count"  onChange={handleChange} className="blank" component={renderField} type="number" label="Number of plates   *" />
                <Field name="buy_email_address" onChange={handleChange} className="blank" component={renderField} type="email" label="Email address   *" />
                <button className = "form-button"onChange={handleChange} type="submit" disabled={pristine || submitting}>Get this</button>
            </form >
            <button className="landing-button form-button" onClick={props.searchMoreMeals}>Search meals</button>
        </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
    createBuyer: (attributes) => dispatch(createBuyer(attributes)),
    searchMoreMeals:() => dispatch(push('/meals'))
})


//Decorate with redux-form
Newbuyer = reduxForm({
    form: 'Newbuyerform',  // a unique identifier for this form
    validate
})(Newbuyer)

// Decorate with connect to read form values
const selector = formValueSelector('Newbuyerform');
export default connect(state => {
    const values = selector(state, 'buyer_name', 'buy_date', 'buy_plate_count', 'buy_email_address');
    return values;
}, mapDispatchToProps)(Newbuyer)