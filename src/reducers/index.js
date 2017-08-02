import * as actions from '../actions';
import AddSeller from '../components/AddSeller';
import AddBuyer from '../components/AddBuyer';

const initialState = {
    meals: [],
    buyers: [],
    forms: [AddSeller, AddBuyer],
    isFetching: false
};

export const neighborFoodsReducer = (state = initialState, action) => {
    if (action.type === actions.LOGIN_FINISHED) {
        return Object.assign({}, state, {token: action.payload})
    }

    if (action.type === actions.ADD_MEAL_FINISHED) {
        return Object.assign({}, state, {
            meals: state.meals.concat(action.mealInput)
        });
    }

    if (action.type === actions.UPDATE_MEAL_FINISHED) {
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

    if (action.type === actions.DELETE_MEAL_FINISHED) {
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

    if (action.type === actions.ADD_BUYER_FINISHED) {
        return Object.assign({}, state, {
            buyers: state.buyers.concat(action.buyerInput)
        });
    }

    if (action.type === actions.UPDATE_BUYER_FINISHED) {
        let dummyState = state;
        //check through each buyer object in the state's buyers array to find the matching id
        dummyState.buyers.forEach(function (buyer) {
            if (buyer.id === action.buyerInput.id) {
                //update old buyer info with new buyer information
                buyer = action.buyerInput;
            }
        })
        return Object.assign({}, state, dummyState);
    }

    if (action.type === actions.DELETE_BUYER_FINISHED) {
        let dummyState = state;
        dummyState.buyers.forEach(function (buyer) {
            if (buyer.id === action.buyerInput.id) {
                //get array index of item to be deleted
                let index = state.buyers.indexOf(buyer);
                dummyState.buyers.splice(index, 1);
            }
        })
        return Object.assign({}, state, dummyState);
    }
    return state;
}