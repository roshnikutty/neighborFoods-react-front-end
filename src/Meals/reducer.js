import { createReducer } from "redux-create-reducer";

const initialState = {
    meals: []
}

const GET_MEALS_FINISHED = (state, action) => {
    return Object.assign({}, state, action.payload)
}

export default createReducer(initialState, {
    GET_MEALS_FINISHED
})