import { createReducer } from "redux-create-reducer";

const initialState = {
    snackbar: false

}

const SHOW_SNACK_BAR = (state, action) => {
    return Object.assign({}, state, {
        snackbar: action.payload
    })
}

const HIDE_SNACK_BAR = (state, action) => {
    return Object.assign({}, state, {
        snackbar: false
    })
}

export default createReducer(initialState, {
    SHOW_SNACK_BAR,
    HIDE_SNACK_BAR
})