import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {neighborFoodsReducer} from './reducers';
import { routerMiddleware, routerReducer } from 'react-router-redux';
import createHistory                       from 'history/createBrowserHistory';
import {createLogger}                      from 'redux-logger';
import { composeWithDevTools }             from 'redux-devtools-extension';

export const history = createHistory();
const logger = createLogger();
const reducer = combineReducers(
    {
        neighborFoodsReducer,
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

