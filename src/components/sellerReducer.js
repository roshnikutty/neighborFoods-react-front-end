import { createReducer } from 'redux-create-reducer';
import * as actions from './sellerActions';
import AddSellerPage from './AddSellerPage';

const initialState = {
    meals: [],
    forms: [AddSellerPage],
    isFetching: false
};

const ADD_MEAL_FINISHED = (state, action) => {
    return Object.assign({}, state, {
        meals: state.meals.concat(action.mealInput)
    });
}

const UPDATE_MEAL_FINISHED = (state, action) => {
    let dummyState = state;
    //check through each meal object in the state's meals array to find the matching id
    dummyState.meals.forEach(function (meal) {
        if (meal.id === action.mealInput.id) {
            //update old meal with new meal information
            meal = action.mealInput;
        }
    })
    return Object.assign({}, state, dummyState);
}

const DELETE_MEAL_FINISHED = (state, action) => {
    let dummyState = state;
    dummyState.meals.forEach(function (meal) {
        if (meal.id === action.mealInput.id) {
            //get array index of item to be deleted
            let index = state.meals.indexOf(meal);
            dummyState.meals.splice(index, 1);
        }
    })
    return Object.assign({}, state, dummyState);
}

export default createReducer(initialState, {
    ADD_MEAL_FINISHED,
    UPDATE_MEAL_FINISHED,
    DELETE_MEAL_FINISHED
})