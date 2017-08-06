import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
// import { neighborFoodsReducer } from './reducers';
import mealReducer from './Meals/reducer';
import mealAddUpdateDeleteReducer from './components/sellerReducer';
import buyerAddUpdateDeleteReducer from './components/buyerReducer';
import loginReducer from './Login/reducer';
import { routerMiddleware, routerReducer } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

export const history = createHistory();
const logger = createLogger();
const reducer = combineReducers(
    {
        // neighborFoodsReducer,
        mealReducer,
        loginReducer,
        mealAddUpdateDeleteReducer,
        buyerAddUpdateDeleteReducer,
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

