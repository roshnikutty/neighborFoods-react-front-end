import { dispatch } from 'react-redux';

export const ADD_BUYER_STARTED = 'ADD_BUYER_STARTED';
export const addBuyerStarted = () => ({
    type: ADD_BUYER_STARTED
});

export const ADD_BUYER_FINISHED = 'ADD_BUYER_FINISHED';
export const addBuyerFinished = () => ({
    type: ADD_BUYER_FINISHED
});

export const addBuyer = buyerInput => {
    return function (dispatch) {
        dispatch(addBuyerStarted());
        let token = document.cookie.replace("token=", '');
        fetch('/buyers', {
            method: 'post',
            headers: {
                'Authorization': `JWT ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(buyerInput)
        })
            .then(function (res) {
                dispatch(addBuyerFinished(), res)
                return res
            })
        // .catch((err) => (dispatch(addBuyerFailed(), err)))
    }
};

//===============================================================
export const UPDATE_BUYER_STARTED = 'UPDATE_BUYER_STARTED';
export const updateBuyerStarted = () => ({
    type: UPDATE_BUYER_STARTED
});

export const UPDATE_BUYER_FINISHED = 'UPDATE_BUYER_FINISHED';
export const updateBuyerFinished = () => ({
    type: UPDATE_BUYER_FINISHED
});

export const updateBuyer = (buyerInput, buyerId) => {
    return function (dispatch) {
        dispatch(updateBuyerStarted());
        let token = document.cookie.replace("token=", '');
        fetch(`/buyers/${buyerId}`, {
            method: 'put',
            headers: {
                'Authorization': `JWT ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(buyerInput)

        }).then(
            dispatch(updateBuyerFinished)
            ).catch(err => console.log(err));
    }
};

//===============================================================
export const DELETE_BUYER_STARTED = 'DELETE_BUYER_STARTED';
export const deleteBuyerStarted = () => ({
    type: DELETE_BUYER_STARTED
});

export const DELETE_BUYER_FINISHED = 'DELETE_BUYER_FINISHED';
export const deleteBuyerFinished = () => ({
    type: DELETE_BUYER_FINISHED
});

export const deleteBuyer = (buyerId) => {
    return function (dispatch) {
        dispatch(deleteBuyerStarted());
        let token = document.cookie.replace("token=", '');
        fetch(`/buyers/${buyerId}`, {
            method: 'delete',
            headers: {
                'Authorization': `JWT ${token}`,
                'Content-Type': 'application/json'
            },
        }).then().catch();
    }
};
