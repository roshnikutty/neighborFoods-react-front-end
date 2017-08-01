import React from 'react';
import './app.css';
import { connect } from 'react-redux';
import { getMeals, addMeal } from '../actions';

export default function GetMeals(props) {
    
    let existingMeals = props.dispatch(getMeals());

    existingMeals = existingMeals.map((meal) => {
                <li className="black-box" key={meal._id}>
                    Seller's Name: {meal.seller_name} <br />
                    Dish: {meal.sell_dish}<br />
                    Cuisine: {meal.sell_cuisine}<br />
                    Date: {meal.sell_date}<br />
                    Number of plates: {meal.sell_plate_count}<br />
                    Pice per plate: {meal.sell_plate_cost}<br />
                    Nuts/eggs/dairy/gluten/shellfish/other/none?: {meal.sell_allergens}<br />
                    Email address: {meal.sell_email_address}<br />
                    <button className="landing-button"> Buy </button>
                </li>
            });

    if (existingMeals.length === 0) {
        existingMeals = <li className="black-box">No Meals here!</li>
    }


    return (
        <div>
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
        postDishes: () => dispatch(addMeal)
    }
}


export default connect(nil, mapDispatchToProps)(GetMeals)