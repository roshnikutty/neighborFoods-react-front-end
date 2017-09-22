import { createReducer } from "redux-create-reducer";

const initialState = {
    isLoggedIn: false
}

const LOGIN_FINISHED = (state, action) => {
    return Object.assign({}, state,
        {
            token: action.payload,
            isLoggedIn: true
        });
}

export default createReducer(initialState, {
    LOGIN_FINISHED
})