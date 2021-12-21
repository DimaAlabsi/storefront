import {combineReducers, createStore, applyMiddleware} from 'redux';
import ReduceCategory from './categories';
import ReduceProducts from './products';
import cartReducer from "./Card";
import {composeWithDevTools} from 'redux-devtools-extension';

import Thunk from './Thunk';


let reducers = combineReducers({ReduceCategory,ReduceProducts,cartReducer});

const store = () => {
  
    return createStore(reducers, composeWithDevTools(applyMiddleware(Thunk)))
}


export default store();

