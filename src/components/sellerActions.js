import { dispatch } from 'react-redux';

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
            dispatch(updateMealFinished())
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
            dispatch(deleteMealFinished())
            )
            .catch(err => console.log(err));
    }
};

//===============================================================
