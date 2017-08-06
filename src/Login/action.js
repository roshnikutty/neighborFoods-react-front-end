import { dispatch } from 'react-redux';
export const LOGIN_STARTED = 'LOGIN_STARTED';
export const loginStarted = () => ({
    type: LOGIN_STARTED
})

export const LOGIN_FINISHED = 'LOGIN_FINISHED';
export const loginFinished = (user) => ({
    type: LOGIN_FINISHED,
    payload: user
})

export const login = (data) => (dispatch) => {
    dispatch(loginStarted())
    //... do things  that makes the user variable!
    let user = { login: 'guy' }
    dispatch(loginFinished(user))
}