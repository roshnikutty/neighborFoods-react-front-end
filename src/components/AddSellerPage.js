import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, formValueSelector, reset } from 'redux-form';
import { ConnectedRouter, push } from 'react-router-redux';
import { Route, Link, Switch } from 'react-router-dom';


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
let AddSeller = (props) => {
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
                <Field name="seller_name" className="blank" component={renderField} type="text" label="Seller's name" />
                <Field name="sell_dish" className="blank" component={renderField} type="text" label="Dish" />
                <Field name="sell_cuisine" className="blank" component={renderField} type="text" label="Cuisine" />
                <Field name="sell_date" className="blank" component={renderField} type="text" label="Date as mm/dd/yyyy" />
                <Field name="sell_plate_count" className="blank" component={renderField} type="number" label="Number of plates" />
                $<Field name="sell_plate_cost" className="blank" component={renderField} type="number" label="Price of each plate" />
                <Field name="sell_allergens" className="blank" component={renderField} type="text" label="Nuts/dairy/eggs/gluten/other/none" />
                <Field name="sell_email_address" className="blank" component={renderField} type="email" label="Email address" size="35" />
                <button type="submit" disabled={pristine || submitting}>Post this</button>
            </form >
        </div>
    );
}

//Decorate with redux-form
AddSeller = reduxForm({
    form: 'AddSellerForm',  // a unique identifier for this form
    validate
})(AddSeller)

// Decorate with connect to read form values
const selector = formValueSelector('AddSellerForm');
AddSeller = connect(state => {
    const values = selector(state, 'seller_name', 'sell_dish', 'sell_cuisine', 'sell_date', 'sell_plate_count',
        'sell_plate_cost', 'sell_allergens', 'sell_email_address');
    return values;
})(AddSeller)

//============================================================================================================
const AddSellerPage = (props) => {
    return (
        <ConnectedRouter history={history}>
            <Switch>
                <Route
                    exact path="/addseller"
                    component={AddSeller}
                />
            </ Switch>
        </ ConnectedRouter>
    );
}

export default connect()(AddSellerPage)