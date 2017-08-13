import { push } from 'react-router-redux';
import { showSnackBar } from '../App/action';

const CREATE_MEAL_STARTED = 'CREATE_MEAL_STARTED';
export const createMealStarted = () => ({
    type: CREATE_MEAL_STARTED
})

export const CREATE_MEAL_FINISHED = 'CREATE_MEAL_FINISHED';
export const createMealFinished = (meal) => ({
    type: CREATE_MEAL_FINISHED,
    payload: meal
});

export const createMeal = (attributes) => {
    console.log("MEAL ATTRIBUTES", attributes);
    //Thunk function
    return function (dispatch) {
        dispatch(createMealStarted())
        //GET request to the API
        let token = document.cookie.replace("token=", '');
        fetch('http://localhost:8080/meals', {
            method: 'post',
            headers: {
                'Authorization': `JWT ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(attributes)
        }).then(res => {
            console.log("You posted this meal!!");
            return res.json()
        }).then(function (res) {
                dispatch(createMealFinished(res))
                return res
            }).catch((err) => console.log(`ERROR in POST BUYER: ${err}`));
        // .catch((err) => (dispatch(getMealsFailed(), err)))
    }
};
