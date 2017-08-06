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
                // TODO: Fix when connected to backend
                dispatch(getMealsFinished([
                    {name: 'I am a meal'}
                ]))
                return res
            })
        // .catch((err) => (dispatch(getMealsFailed(), err)))
    }
};
