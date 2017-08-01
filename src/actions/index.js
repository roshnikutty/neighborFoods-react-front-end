import {dispatch} from 'react-redux'

export const LOGIN_STARTED ='LOGIN_STARTED';
export const loginStarted = () =>({
    type: LOGIN_STARTED
})

export const LOGIN_FINISHED ='LOGIN_FINISHED';
export const loginFinished = (user) =>({
    type: LOGIN_FINISHED,
    payload: user
})

export const login = (data) => (dispatch)  => {
        dispatch(loginStarted())
        //... do things  that makes the user variable!
        let user = {login: 'guy'}
        dispatch(loginFinished(user))
}

export const GET_MEALS_STARTED ='GET_MEALS_STARTED';
export const getMealsStarted = () =>({
    type: GET_MEALS_STARTED
})

export const GET_MEALS_FINISHED ='GET_MEALS_FINISHED';
export const getMealsFinished = () =>({
    type: GET_MEALS_FINISHED
});

export const GET_MEALS = 'GET_MEALS';
export const getMeals = () => {
   {type: GET_MEALS};
    //Thunk function
    return function(dispatch) {
        dispatch(GET_MEALS_STARTED)
        //GET request to the API
        let token = document.cookie.replace("token=", '');
        fetch('/meals', {
            method: 'get',
            headers: {
                'Authorization': `JWT ${token}`,
                'Content-Type': 'application/json'
            }
        })
        .then(function(res) {
            dispatch(GET_MEALS_FINISHED, res)
            return res
        })
        // .catch((err) => (dispatch(GET_MEALS_FAILED, err)))
    }
};
//===================================================



export const ADD_MEAL_STARTED ='ADD_MEAL_STARTED';
export const addMealStarted = () =>({
    type: ADD_MEAL_STARTED
})

export const ADD_MEAL_FINISHED ='ADD_MEAL_FINISHED';
export const addMealFinished = () =>({
    type: ADD_MEAL_FINISHED
});

export const ADD_MEAL = 'ADD_MEAL';
export const addMeal = mealInput => {
    //Thunk function
    return function(dispatch) {
        dispatch(ADD_MEAL_STARTED)
        //POST request to the API
        let token = document.cookie.replace("token=", '');
        fetch('/meals', {
            method: 'post',
            headers: {
                'Authorization': `JWT ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(mealInput)
        })
        .then(function(res) {
            dispatch(ADD_MEAL_FINISHED, res)
            return res
        })
        // .catch((err) => (dispatch(ADD_MEAL_FAILED, err)))
    }
};

//===============================================================

export const UPDATE_MEAL_STARTED = 'UPDATE_MEAL_STARTED';
export const updateMealStarted = () =>({
    type: UPDATE_MEAL_STARTED
});

export const UPDATE_MEAL = 'UPDATE_MEAL';
export const updateMeal = mealInput =>({
    type: UPDATE_MEAL,
    mealInput
});

export const UPDATE_MEAL_FINISHED = 'UPDATE_MEAL_FINISHED';
export const updateMealFinished = () => ({
    type: UPDATE_MEAL_FINISHED
});
//===============================================================

export const DELETE_MEAL_STARTED = 'DELETE_MEAL_STARTED';
export const deleteMealStarted = () => ({
    type: DELETE_MEAL_STARTED
});

export const DELETE_MEAL = 'DELETE_MEAL';
export const deleteMeal = mealInput =>({
    type: DELETE_MEAL,
    mealInput
});

export const DELETE_MEAL_FINISHED = 'DELETE_MEAL_FINISHED';
export const deleteMealFinished = () => ({
    type: DELETE_MEAL_FINISHED
});
//===============================================================
export const ADD_BUYER_STARTED = 'ADD_BUYER_STARTED';
export const addBuyerStarted = () => ({
    type: ADD_BUYER_STARTED
});

export const ADD_BUYER = 'ADD_BUYER';
export const addBuyer = buyerinfo => ({
    type: ADD_BUYER,
    buyerinfo                               //Object with buyer info
});

export const ADD_BUYER_FINISHED = 'ADD_BUYER_FINISHED';
export const addBuyerFinished = () => ({
    type: ADD_BUYER_FINISHED
});
//===============================================================
export const UPDATE_BUYER_STARTED = 'UPDATE_BUYER_STARTED';
export const updateBuyerStarted = () => ({
    type: UPDATE_BUYER_STARTED
});

export const UPDATE_BUYER = 'UPDATE_BUYER';
export const updateBuyer = buyerinfo =>({
    type: UPDATE_BUYER,
    buyerinfo
});

export const UPDATE_BUYER_FINISHED = 'UPDATE_BUYER_FINISHED';
export const updateBuyerFinished = () => ({
    type: UPDATE_BUYER_FINISHED
});
//===============================================================
export const DELETE_BUYER_STARTED = 'DELETE_BUYER_STARTED';
export const deleteBuyerStarted = () => ({
    type: DELETE_BUYER_STARTED
});

export const DELETE_BUYER = 'DELETE_BUYER';
export const deleteBuyer = buyerinfo =>({
    type: DELETE_BUYER,
    buyerinfo
});

export const DELETE_BUYER_FINISHED = 'DELETE_BUYER_FINISHED';
export const deleteBuyerFinished = () => ({
    type: DELETE_BUYER_FINISHED
});
//===============================================================
