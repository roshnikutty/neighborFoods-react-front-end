import React from 'react';
import { connect } from 'react-redux';
import { getMeals } from './action';
import { Route, Link, Switch } from 'react-router-dom';
import { ConnectedRouter, push } from 'react-router-redux';
import store, { history } from '../store';
class Meals extends React.Component {
    componentWillMount() {
        store.dispatch(getMeals());
    }
    render() {
        // console.log("EXISTING MEAL CHECK", this.props.existingMeals);

        let allExistingMeals = undefined;

        if (this.props.existingMeals) {
            allExistingMeals = this.props.existingMeals.map((meal) => {
                return (  
                    //key uses backend meal id (meal_id)
                    <li className="black-box meal-item" key={meal.meal_id}>         
                        <strong>Sellers Name</strong> {meal.seller_name} <br />
                        <strong>Dish</strong> {meal.sell_dish}<br />
                        <strong>Cuisine</strong> {meal.sell_cuisine}<br />
                        <strong>Date</strong> {meal.sell_date}<br />
                        <strong>Number of plates</strong> {meal.sell_plate_count}<br />
                        <strong>Price per plate</strong> ${meal.sell_plate_cost}<br />
                        <strong>Allergens</strong> {meal.sell_allergens}<br />
                        <strong>Email address</strong> {meal.sell_email_address}<br />
                        <button className="landing-button buy-button" onClick={this.props.buyMeal}> Buy </button> 
                    </li>);
            })
        }
        else {
            allExistingMeals = <li className="black-box">No Meals here!</li>
        }
        return (
            <div>
                <header>
                <h1>
                    <Link to="/">NeighborFoods</Link>
                    </h1>
                    <button className="post-dishes landing-button"
                        onClick={this.props.postDishes}>Post your dishes
                    </button>
                </header>
                <div >
                    <ul className="meal-area">
                    {/*I HAVE MEALS YAY!*/}
                    {allExistingMeals}
                    </ul>
                </div>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) =>
    ({
        postDishes: () => dispatch(push('/meals/new')),
        buyMeal: () => dispatch(push('/buyers/new'))
    })

const mapStateToProps = (state) => ({
    existingMeals: state.mealReducer.meals
})


export default connect(mapStateToProps, mapDispatchToProps)(Meals);
