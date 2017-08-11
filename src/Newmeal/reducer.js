import { createReducer } from "redux-create-reducer";
import * as actions from './action';

const initialState = {
    meals:[]
}

const CREATE_MEAL_FINISHED = (state, action) => {
    return Object.assign({}, state, {
        meals: [...state.meals, action.payload]
    })
}

export default createReducer(initialState, {
    CREATE_MEAL_FINISHED
})