import { createReducer } from "redux-create-reducer";
import * as actions from './action';

const initialState = {
    open: false
}

const SHOW_SNACK_BAR = (state, action) => {
    return Object.assign({}, state, {
        snackbar: action.payload,
        open: true
    })
}

const HIDE_SNACK_BAR = (state, action) => {
    return Object.assign({}, state, {
        snackbar: null,
        open: false
    })
}

export default createReducer(initialState, {
    SHOW_SNACK_BAR
})