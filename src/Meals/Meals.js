import React from 'react';
import { connect } from 'react-redux';
import { getMeals } from './action';
import { Route, Link, Switch } from 'react-router-dom';
import { ConnectedRouter, push } from 'react-router-redux';
import { history } from '../store';
//import { AddBuyerPage } from './AddBuyerPage';
//import { AddSellerPage } from './AddSellerPage';

const GetMeals = (props) => {

    let existingMeals = props.dispatch(getMeals());

    existingMeals = existingMeals.map((meal) => {
        return (<li className="black-box" key={meal._id}>
            Seller's Name: {meal.seller_name} <br />
            Dish: {meal.sell_dish}<br />
            Cuisine: {meal.sell_cuisine}<br />
            Date: {meal.sell_date}<br />
            Number of plates: {meal.sell_plate_count}<br />
            Pice per plate: {meal.sell_plate_cost}<br />
            Nuts/eggs/dairy/gluten/shellfish/other/none?: {meal.sell_allergens}<br />
            Email address: {meal.sell_email_address}<br />
            <button className="landing-button" onClick={props.buyMeal}> Buy </button>
        </li>);
    });

    if (existingMeals.length === 0) {
        existingMeals = <li className="black-box">No Meals here!</li>
    }

    return (
        <div>
            <h1><Link to="/">NeighborFoods</Link></h1>
            {/*This button click should route the AddSeller.js form component*/}
            <button className="post-dishes" onClick={props.postDishes}>Post your dishes</button>
            <ul>
                {existingMeals}
            </ul>
        </div>
    );
}

function mapDispatchToProps(dispatch) {
    return {
        postDishes: () => dispatch(push('/addseller')),
        buyMeal: () => dispatch(push('/addbuyer'))
    }
}


//=============================================================

class Meals extends React.Component {
    componentWillMount() {
        this.props.dispatch(getMeals())
    }

    render() {
        return (<div className="black-box">
            I HAVE MEALS YAY!
        </div>)
    }
}

export default connect()(Meals);