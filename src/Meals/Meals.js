import React from 'react';
import { connect } from 'react-redux';
import { getMeals } from './action';
import { Route, Link, Switch } from 'react-router-dom';
import {  push } from 'react-router-redux';
import store, { history } from '../store';
import Newmeal from '../Newmeal';
import Newbuyer from '../Newbuyer';
import Emptymeals from './Emptymeals';

class Meals extends React.Component {
    componentWillMount() {
        store.dispatch(getMeals());
    }

    render() {
        let allExistingMeals = undefined;

        if (this.props.existingMeals.length > 0) {
            allExistingMeals = this.props.existingMeals.map((meal) => {
                //converting iso 8601 date to string
                let dString = `${meal.sell_date}`;
                //extracting month, date, year from iso 8601 format separated by hyphens
                let dSplit = dString.replace(/\D/g, " ").split(" ");
                let date = (`${dSplit[1]}-${dSplit[2]}-${dSplit[0]}`);

                return (
                    //key uses backend meal id (meal_id)
                    <li className="black-box meal-item" key={meal.meal_id}>
                        <div className="two-col-left">
                            <strong>Seller's Name</strong> {meal.seller_name} <br />
                            <strong>Dish</strong> {meal.sell_dish}<br />
                            <strong>Cuisine</strong> {meal.sell_cuisine}<br />
                            <strong>Date of Posting</strong> {date}<br />
                        </div>
                        <div className="two-col-right">
                            <strong>Number of plates</strong> {meal.sell_plate_count}<br />
                            <strong>Price per plate</strong> ${meal.sell_plate_cost}<br />
                            <strong>Allergens</strong> {meal.sell_allergens}<br />
                            <strong>Email address</strong> {meal.sell_email_address}<br />
                        </div>
                        <p className="buy-button">
                            <button className="landing-button" onClick={this.props.buyMeal(meal.meal_id)}> Buy </button>
                        </p>
                    </li>);
            })
        }
        else {
            allExistingMeals = <li className="black-box"><Emptymeals /></li>
        }
        return (
            <div>
                <header>
                    <h1>
                        <Link to="/">NeighborFoods</Link>
                    </h1>
                    <p className="post-buy-button">
                        <button className="landing-button"
                            onClick={this.props.postDishes}>Post your dishes
                    </button>
                    </p>
                </header>
                <div >
                    <ul className="meal-area">
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
        buyMeal: (id) => () => dispatch(push(`/meals/${id}/buy`))
    })

const mapStateToProps = (state) => ({
    existingMeals: state.mealReducer.meals
})


let MealsRouter = (props)  => {
    console.log('URL', props.match.url)
    return (
        <Switch>
            <Route
                exact
                path={`${props.match.url}`}
                component={connect(mapStateToProps, mapDispatchToProps)(Meals)}
            />
            <Route
                path={`${props.match.url}/new`}
                component={Newmeal}>
            </Route>
            <Route
                exact
                path={`${props.match.url}/:id/buy`}
                component={Newbuyer}>
            </Route>
        </Switch>
    )
}

export default connect()(MealsRouter)