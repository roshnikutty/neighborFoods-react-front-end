import { push } from 'react-router-redux';
import {showSnackBar} from '../App/action'

const CREATE_BUYER_STARTED = 'CREATE_BUYER_STARTED';
export const createBuyerStarted = () => ({
    type: CREATE_BUYER_STARTED
})

export const CREATE_BUYER_FINISHED = 'CREATE_BUYER_FINISHED';
export const createBuyerFinished = (buyer) => ({
    type: CREATE_BUYER_FINISHED,
    payload: buyer
});

export const createBuyer = (attributes) => {
    console.log("BUYER ATTRIBUTES", attributes);
    //Thunk function
    return function (dispatch) {
        dispatch(createBuyerStarted())
        //POST request to the API
        let token = window.localStorage.getItem('token');
        fetch('http://localhost:8080/buyers', {
            method: 'post',
            headers: {
                'Authorization': `JWT ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(attributes)
        }).then(res => {
            console.log("You bought this!!");
            return res.json()
        }).then(function (res) {
            console.log("RESPONSE FROM POST BUYER", res);
            dispatch(showSnackBar("I succeeded"))
            // dispatch(push('/meals'))
            // console.log(`The price of this purchase is ${attributes.buy_plate_count * meal.sell_plate_cost}`)
            dispatch(createBuyerFinished(res))
            // return res
        }).catch((err) => console.log(`ERROR in POST BUYER: ${err}`));
        // .catch((err) => (dispatch(getMealsFailed(), err)))
    }
};
