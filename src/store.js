import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware, routerReducer } from 'react-router-redux';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import mealReducer from './Meals/reducer';
import loginReducer from './Login/reducer';
// import { neighborFoodsReducer } from './reducers';
import {reducer as formReducer} from 'redux-form'; 

export const history = createHistory();
const logger = createLogger();
const reducer = combineReducers(
    {
        // neighborFoodsReducer,
        mealReducer,
        loginReducer,
        form: formReducer,
        routing: routerReducer
    }
)

const middleware = [
    thunk,
    logger,
    routerMiddleware(history)
];


export default createStore(reducer,
    composeWithDevTools(applyMiddleware(...middleware))
);

