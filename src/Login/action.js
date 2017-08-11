import { dispatch } from 'react-redux';
import { push } from 'react-router-redux';
import { getMeals } from '../Meals/action';

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
    dispatch(loginStarted());
    console.log("login credentials", data)
    fetch('http://localhost:8080/users/token', {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)      //username, password
    }).then(token => {
            return token.json()             //Returns a promise that will be resolved
    }
        ).then(token => {               // this should get the value from the promise above
            console.log("TESTING TOKEN", token.token);
            window.localStorage.setItem('token', token.token);
            console.log(localStorage.token);
            dispatch(loginFinished(token));
            dispatch(push('/meals'));
        }).catch(err => console.log(err))
}