import { dispatch } from 'react-redux';

export const SIGNUP_STARTED = 'SIGNUP_STARTED';
export const signupStarted = () => ({
    type: SIGNUP_STARTED
})

export const SIGNUP_FINISHED = 'SIGNUP_FINISHED';
export const signupFinished = (user) => ({
    type: SIGNUP_FINISHED,
    payload: user
})

export const signup = (attributes) => (dispatch) => {
    dispatch(signupStarted())
    console.log("Logging from inside signup action function: ${attributes}");
    fetch('http://localhost:8080/users',
        {
            method: 'post',
            body: JSON.stringify(attributes),
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            mode: 'no-cors'

        }).then(
        (res) => {
            dispatch(signupFinished(res.body)
            )
                .catch(err => console.log(err))
        }
        );


}