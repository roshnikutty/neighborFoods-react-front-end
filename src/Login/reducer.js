import { createReducer } from "redux-create-reducer";
// import * as actions from './action';

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