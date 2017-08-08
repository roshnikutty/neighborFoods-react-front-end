const CREATE_MEAL_STARTED = 'CREATE_MEAL_STARTED';
export const createMealStarted = () => ({
    type: CREATE_MEAL_STARTED
})

export const CREATE_MEAL_FINISHED = 'CREATE_MEAL_FINISHED';
export const createMealFinished = (meals) => ({
    type:CREATE_MEAL_FINISHED,
    payload: meals
});

export const createMeal = (attributes) => {
    //Thunk function
    return function (dispatch) {
        dispatch(createMealStarted())
        //GET request to the API
        let token = document.cookie.replace("token=", '');
        fetch('/meals', {
            method: 'post',
            headers: {
                'Authorization': `JWT ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(attributes)
        })
            .then(function (res) {
                dispatch(createMealFinished([
                    {name: 'I am a meal'}
                ]))
                return res
            })
        // .catch((err) => (dispatch(getMealsFailed(), err)))
    }
};
