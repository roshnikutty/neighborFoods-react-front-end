const API_URI = process.env.REACT_APP_API_URI;

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
    let token = window.localStorage.getItem('token');
    return function (dispatch) {
        dispatch(getMealsStarted())
        //GET request to the API
        return fetch(`${API_URI}/meals`, {
            method: 'GET',
            headers: {
                'Authorization': `JWT ${token}`,
                'Content-Type': 'application/json'
            }
        }).then(res => {
            console.log(res)
            return res.json()
        }).then(res => {
            dispatch(getMealsFinished(res))
        }).catch(err => console.log(`error getting meals:`, err))
        // .catch((err) => (dispatch(getMealsFailed(), err)))
    }
};