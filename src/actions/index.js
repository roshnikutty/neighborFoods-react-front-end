import { dispatch } from 'react-redux'

export const LOGIN_STARTED = 'LOGIN_STARTED';
export const loginStarted = () => ({
    type: LOGIN_STARTED
})

export const LOGIN_FINISHED = 'LOGIN_FINISHED';
export const loginFinished = (user) => ({
    type: LOGIN_FINISHED,
    payload: user
})

export const login = (data) => (dispatch) => {
    dispatch(loginStarted())
    //... do things  that makes the user variable!
    let user = { login: 'guy' }
    dispatch(loginFinished(user))
}
//===================================================

export const GET_MEALS_STARTED = 'GET_MEALS_STARTED';
export const getMealsStarted = () => ({
    type: GET_MEALS_STARTED
})

export const GET_MEALS_FINISHED = 'GET_MEALS_FINISHED';
export const getMealsFinished = (meals) => ({
    type: GET_MEALS_FINISHED,
    payload: meals
});

export const getMeals = () => {
    //Thunk function
    return function (dispatch) {
        dispatch(getMealsStarted())
        //GET request to the API
        let token = document.cookie.replace("token=", '');
        fetch('/meals', {
            method: 'get',
            headers: {
                'Authorization': `JWT ${token}`,
                'Content-Type': 'application/json'
            }
        })
            .then(function (res) {
                dispatch(getMealsFinished(), res)
                return res
            })
        // .catch((err) => (dispatch(getMealsFailed(), err)))
    }
};
//===================================================

export const ADD_MEAL_STARTED = 'ADD_MEAL_STARTED';
export const addMealStarted = () => ({
    type: ADD_MEAL_STARTED
})

export const ADD_MEAL_FINISHED = 'ADD_MEAL_FINISHED';
export const addMealFinished = () => ({
    type: ADD_MEAL_FINISHED
});

//mealInput are the values from the AddSeller form
export const addMeal = mealInput => {
    //Thunk function
    return function (dispatch) {
        dispatch(addMealStarted())
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
            .then(function (res) {
                dispatch(addMealFinished(), res)
                return res
            })
        // .catch((err) => (dispatch(addMealFailed(), err)))
    }
};

//===============================================================

export const UPDATE_MEAL_STARTED = 'UPDATE_MEAL_STARTED';
export const updateMealStarted = () => ({
    type: UPDATE_MEAL_STARTED
});

export const UPDATE_MEAL_FINISHED = 'UPDATE_MEAL_FINISHED';
export const updateMealFinished = () => ({
    type: UPDATE_MEAL_FINISHED
});

export const updateMeal = (mealInput, mealId) => {
    return function (dispatch) {
        dispatch(updateMealStarted());
        let token = document.cookie.replace("token=", '');
        fetch(`/meals/${mealId}`, {
            method: 'put',
            headers: {
                'Authorization': `JWT ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(mealInput)
        }).then(
            dispatch(updateMealFinished(), res)
            )
            .catch(err => console.log(err));
    }
}

//===============================================================

export const DELETE_MEAL_STARTED = 'DELETE_MEAL_STARTED';
export const deleteMealStarted = () => ({
    type: DELETE_MEAL_STARTED
});

export const DELETE_MEAL_FINISHED = 'DELETE_MEAL_FINISHED';
export const deleteMealFinished = () => ({
    type: DELETE_MEAL_FINISHED
});

export const deleteMeal = mealId => {
    return function (dispatch) {
        dispatch(deleteMealStarted());
        let token = document.cookie.replace("token=", '');
        fetch(`/meals/${mealId}`, {
            method: 'delete',
            headers: {
                'Authorization': `JWT ${token}`,
                'Content-Type': 'application/json'
            },
        }).then(
            dispatch(deleteMealFinished(), res)
            )
            .catch(err => console.log(err));
    }
};

//===============================================================
export const ADD_BUYER_STARTED = 'ADD_BUYER_STARTED';
export const addBuyerStarted = () => ({
    type: ADD_BUYER_STARTED
});

export const ADD_BUYER_FINISHED = 'ADD_BUYER_FINISHED';
export const addBuyerFinished = () => ({
    type: ADD_BUYER_FINISHED
});

export const addBuyer = buyerInput => {
    return function (dispatch) {
        dispatch(addBuyerStarted());
        let token = document.cookie.replace("token=", '');
        fetch('/buyers', {
            method: 'post',
            headers: {
                'Authorization': `JWT ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(buyerInput)
        })
            .then(function (res) {
                dispatch(addBuyerFinished(), res)
                return res
            })
        // .catch((err) => (dispatch(addBuyerFailed(), err)))
    }
};

//===============================================================
export const UPDATE_BUYER_STARTED = 'UPDATE_BUYER_STARTED';
export const updateBuyerStarted = () => ({
    type: UPDATE_BUYER_STARTED
});

export const UPDATE_BUYER_FINISHED = 'UPDATE_BUYER_FINISHED';
export const updateBuyerFinished = () => ({
    type: UPDATE_BUYER_FINISHED
});

export const updateBuyer = (buyerInput, buyerId) => {
    return function (dispatch) {
        dispatch(updateBuyerStarted());
        let token = document.cookie.replace("token=", '');
        fetch(`/buyers/${buyerId}`, {
            method: 'put',
            headers: {
                'Authorization': `JWT ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(buyerInput)

        }).then(
            dispatch(updateBuyerFinished, res)
            ).catch(err => console.log(err));
    }
};

//===============================================================
export const DELETE_BUYER_STARTED = 'DELETE_BUYER_STARTED';
export const deleteBuyerStarted = () => ({
    type: DELETE_BUYER_STARTED
});

export const DELETE_BUYER_FINISHED = 'DELETE_BUYER_FINISHED';
export const deleteBuyerFinished = () => ({
    type: DELETE_BUYER_FINISHED
});

export const deleteBuyer = (buyerId) => {
    return function (dispatch) {
        dispatch(deleteBuyerStarted());
        let token = document.cookie.replace("token=", '');
        fetch(`/buyers/${buyerId}`, {
            method: 'delete',
            headers: {
                'Authorization': `JWT ${token}`,
                'Content-Type': 'application/json'
            },
        }).then().catch();
    }
};
//===============================================================
