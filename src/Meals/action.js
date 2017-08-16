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
        return fetch('http://localhost:8080/meals', {
            method: 'GET',
            headers: {
                'Authorization': `JWT ${token}`,
                'Content-Type': 'application/json'
            }
        }).then(res => {
            return res.json()
        }).then(res => {
            console.log(res);
            dispatch(getMealsFinished(res))
        }).catch(err => console.log(`error getting meals: ${err}`))
        // .catch((err) => (dispatch(getMealsFailed(), err)))
    }
};

// export const buyMeal =() =>{

// }