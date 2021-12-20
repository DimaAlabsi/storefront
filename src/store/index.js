import {combineReducers, createStore} from 'redux';
import ReduceCategory from './categories';
import ReduceProducts from './products';
import cartReducer from "./Card";



let reducers = combineReducers({ReduceCategory,ReduceProducts,cartReducer});

const store = () => {
  
    return createStore(reducers)
}


export default store();

