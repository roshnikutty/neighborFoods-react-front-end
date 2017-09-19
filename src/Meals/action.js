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
            //Do not display meals with 0 plates
            //Extracting array meals from res to filter out the array of 0 plate counts     
            let meals = res.meals;
            console.log(res);
            let newMeals = meals.filter(function (meal) {
               return meal.sell_plate_count!==0 ;
            })
            console.log("ARRAY OF MEALS WITHOUT 0 PLATES", newMeals);

            //Re-creating a response Object
            let response = {
                meals: newMeals
            }
            dispatch(getMealsFinished(response))
        }).catch(err => console.log(`error getting meals:`, err))
        // .catch((err) => (dispatch(getMealsFailed(), err)))
    }
};