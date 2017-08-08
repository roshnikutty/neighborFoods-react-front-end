import { dispatch } from 'react-redux';
import { push } from 'react-router-redux';

export const LOGIN_STARTED = 'LOGIN_STARTED';
export const loginStarted = () => ({
    type: LOGIN_STARTED
})

export const LOGIN_FINISHED = 'LOGIN_FINISHED';
export const loginFinished = (token) => ({
    type: LOGIN_FINISHED,
    payload: token
})

export const login = (data) => (dispatch) => {
    console.log("INPUT DATA IN ACTION", data);
    // let token = document.cookie.replace("token=", '');
    dispatch(loginStarted());
    fetch('http://localhost:8080/users/token', {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            // 'Authorization': `JWT ${token}`
        },
        // mode: 'no-cors',
        body: JSON.stringify(data)      //username, password
    }).then(token => {
        return token.json()  //Returns a promise that will be resolved
    }
        ).then(token => {       // this should get the value from the promise above
            dispatch(loginFinished(token))
            dispatch(push('/meals'));
        }).catch(err => console.log(err))

}