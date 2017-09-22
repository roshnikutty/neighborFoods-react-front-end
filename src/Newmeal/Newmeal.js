import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, formValueSelector, reset } from 'redux-form';
import { push } from 'react-router-redux';
import { Link } from 'react-router-dom';
import { createMeal } from './action';
import { clearAuthToken } from '../logout';

const validate = values => {
    const errors = {}
    if (!values.seller_name) {
        errors.seller_name = 'Required'
    }

    if (!values.sell_dish) {
        errors.sell_dish = 'Required'
    }

    if (!values.sell_allergens) {
        errors.sell_allergens = 'Required'
    }

    if (!values.sell_email_address) {
        errors.sell_email_address = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.sell_email_address)) {
        errors.sell_email_address = 'Invalid email address'
    }

    if (!values.sell_plate_count) {
        errors.sell_plate_count = 'Required'
    } else if (isNaN(Number(values.sell_plate_count))) {
        errors.sell_plate_count = 'Must be a number'
    } else if (Number(values.sell_plate_count) <= 0) {
        errors.sell_plate_count = 'You must choose a number greater than 0'
    }

    if (!values.sell_plate_cost) {
        errors.sell_plate_cost = 'Required'
    } else if (isNaN(Number(values.sell_plate_cost))) {
        errors.sell_plate_cost = 'Must be a number'
    } else if (Number(values.sell_plate_cost) <= 0) {
        errors.sell_plate_cost = 'You must choose a number greater than 0'
    }
    return errors;
}
const renderField = ({ input, label, type, meta: { touched, error } }) => (
    <div className="each-input">
        <input {...input} placeholder={label} type={type} className="blank large-line-height" size="35" />
        {touched && (error && <span>{error}</span>)}
    </div>
)
let Newmeal = (props) => {
    const { handleSubmit, pristine, reset, submitting, createMeal } = props;
    return (
        <div>
            <h1><Link to="/">NeighborFoods</Link></h1>
            <p className="logout-style-p">
                <button className="logout-style" onClick={props.logout}>Log out</button>
            </p>
            <form className="black-box" onSubmit={handleSubmit(props.createMeal)} id="new-meal-style">
                <p className="search-meals-button">
                    <button className="landing-button" onClick={props.searchMoreMeals}>Search meals</button>
                </p>
                <Field name="seller_name" component={renderField} type="text" label="Seller's name   *" />
                <Field name="sell_dish" component={renderField} type="text" label="Dish   *" />
                <Field name="sell_cuisine" component={renderField} type="text" label="Cuisine" />
                <Field name="sell_date" component={renderField} type="text" label="Date as mm/dd/yyyy" />
                <Field name="sell_plate_count" component={renderField} type="number" label="Number of plates   *" />
                <Field name="sell_plate_cost" component={renderField} type="number" label="$ for a plate   *" />
                <Field name="sell_allergens" component={renderField} type="text" label="Nuts/dairy/eggs/gluten/other/none   *" />
                <Field name="sell_email_address" component={renderField} type="email" label="Email address   *" size="35" />
                <p className="post-buy-button">
                    <button type="submit" disabled={pristine || submitting}>Post a delicacy</button>
                </p>
                <div className="required">* is required</div>
            </form >
        </div>
    );
}
const mapDispatchToProps = (dispatch) => {
    return {
        createMeal: (attributes) => dispatch(createMeal(attributes)),
        searchMoreMeals: () => dispatch(push('/meals')),
        logout: () => {
            clearAuthToken();
            dispatch(push('/'));
        }
    }
}
//Decorate with redux-form
Newmeal = reduxForm({
    form: 'Newmealform',  // a unique identifier for this form
    validate
})(Newmeal)

// Decorate with connect to read form values
const selector = formValueSelector('Newmealform');
export default connect(state => {
    const values = selector(state, 'seller_name', 'sell_dish', 'sell_cuisine', 'sell_date', 'sell_plate_count',
        'sell_plate_cost', 'sell_allergens', 'sell_email_address');
    return values;
}, mapDispatchToProps)(Newmeal)

