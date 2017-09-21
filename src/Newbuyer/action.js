import { push } from 'react-router-redux';
import { showSnackBar } from '../App/action'

const API_URI = process.env.REACT_APP_API_URI;

const CREATE_BUYER_STARTED = 'CREATE_BUYER_STARTED';
export const createBuyerStarted = () => ({
    type: CREATE_BUYER_STARTED
})

export const CREATE_BUYER_FINISHED = 'CREATE_BUYER_FINISHED';
export const createBuyerFinished = (buyer) => ({
    type: CREATE_BUYER_FINISHED,
    payload: buyer
});

export const createBuyer = (mealId, attributes) => {
    //Thunk function
    return function (dispatch) {
        dispatch(createBuyerStarted())
        //POST request to the API with buyer's request
        let token = window.localStorage.getItem('token');
        fetch(`${API_URI}/buyers`, {
            method: 'post',
            headers: {
                'Authorization': `JWT ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(attributes)
        }).then(res => {
            return res.json()
        }).then(function (res) {
            let buyer_id = res.buyer_id;
            fetch(`${API_URI}/meals/${mealId}/${buyer_id}`, {
                method: 'post',
                headers: {
                    'Authorization': `JWT ${token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({buy_plate_count: res.buy_plate_count})
            }).then(res => {
                if (res.status === 400) {
                    dispatch(showSnackBar("There aren't as many plates as you requested."))
                }
                else {
                    dispatch(showSnackBar("Your request to buy was processed!"))
                    dispatch(push('/meals'))
                    dispatch(createBuyerFinished(res))
                }
            })
        }).catch((err) => console.log(`ERROR in POST BUYER: ${err}`));
    }
};
