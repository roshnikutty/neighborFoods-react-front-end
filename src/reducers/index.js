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

    if (action.type === actions.UPDATE_MEAL) {
        let dummyState = state;
        //check through each meal object in the state's meals array to find the matching id
        dummyState.meals.forEach(function (meal) {
            if (meal.id === action.mealinfo.id) {
                //update old meal with new meal information
                meal = action.mealinfo;
            }
        })
        return Object.assign({}, state, dummyState);
    }


    if (action.type === actions.DELETE_MEAL) {
        let dummyState = state;
        dummyState.meals.forEach(function (meal) {
            if (meal.id === action.mealinfo.id) {
                //get array index of item to be deleted
                let index = state.meals.indexOf(meal);
                dummyState.meals.splice(index, 1);
            }
        })
        return Object.assign({}, state, dummyState);
    }

    if (action.type === actions.ADD_BUYER) {
        return Object.assign({}, state, {
            buyers: state.buyers.concat(action.buyerInput)
        });
    }

    if (action.type === actions.UPDATE_BUYER) {
        let dummyState = state;
        //check through each meal object in the state's meals array to find the matching id
        dummyState.buyers.forEach(function (buyer) {
            if (buyer.id === action.buyerinfo.id) {
                //update old meal with new meal information
                buyer = action.buyerinfo;
            }
        })
        return Object.assign({}, state, dummyState);
    }


    if (action.type === actions.DELETE_BUYER) {
        let dummyState = state;
        dummyState.buyers.forEach(function (buyer) {
            if (buyer.id === action.buyerinfo.id) {
                //get array index of item to be deleted
                let index = state.buyers.indexOf(buyer);
                dummyState.buyers.splice(index, 1);
            }
        })
        return Object.assign({}, state, dummyState);
    }

    return state;
}