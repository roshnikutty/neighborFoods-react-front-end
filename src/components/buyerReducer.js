import { createReducer } from 'redux-create-reducer';
import * as actions from './buyerActions';
import AddBuyerPage from './AddBuyerPage';

const initialState = {
    buyers: [],
    forms: [AddBuyerPage],
    isFetching: false
};


const ADD_BUYER_FINISHED = (state, action) => {
    return Object.assign({}, state, {
        buyers: state.buyers.concat(action.buyerInput)
    });
}

const UPDATE_BUYER_FINISHED = (state, action) => {
    let dummyState = state;
    //check through each buyer object in the state's buyers array to find the matching id
    dummyState.buyers.forEach(function (buyer) {
        if (buyer.id === action.buyerInput.id) {
            //update old buyer info with new buyer information
            buyer = action.buyerInput;
        }
    })
    return Object.assign({}, state, dummyState);
}

const DELETE_BUYER_FINISHED = (state, action) => {
    let dummyState = state;
    dummyState.buyers.forEach(function (buyer) {
        if (buyer.id === action.buyerInput.id) {
            //get array index of item to be deleted
            let index = state.buyers.indexOf(buyer);
            dummyState.buyers.splice(index, 1);
        }
    })
    return Object.assign({}, state, dummyState);
}

export default createReducer(initialState, {
    ADD_BUYER_FINISHED,
    UPDATE_BUYER_FINISHED,
    DELETE_BUYER_FINISHED
})