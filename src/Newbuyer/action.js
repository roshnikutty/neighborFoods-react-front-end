const CREATE_BUYER_STARTED = 'CREATE_BUYER_STARTED';
export const createBuyerStarted = () => ({
    type: CREATE_BUYER_STARTED
})

export const CREATE_BUYER_FINISHED = 'CREATE_BUYER_FINISHED';
export const createBuyerFinished = (buyer) => ({
    type:CREATE_BUYER_FINISHED,
    payload: buyer
});

export const createBuyer = (attributes) => {
    //Thunk function
    return function (dispatch) {
        dispatch(createBuyerStarted())
        //GET request to the API
        let token = document.cookie.replace("token=", '');
        fetch('/buyers', {
            method: 'post',
            headers: {
                'Authorization': `JWT ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(attributes)
        })
            .then(function (res) {
                dispatch(createBuyerFinished([
                    {name: 'I am a buyer'}
                ]))
                return res
            })
        // .catch((err) => (dispatch(getMealsFailed(), err)))
    }
};
