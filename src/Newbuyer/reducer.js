import { createReducer } from "redux-create-reducer";
import * as actions from './action';

const initialState = {
    buyers:[]
}

const CREATE_BUYER_FINISHED = (state, action) => {
    return Object.assign({}, state, {buyers: action.payload})
}

export default createReducer(initialState, {
    CREATE_BUYER_FINISHED
})