import { combineReducers } from "redux";
import productReducer from './products/products-reducer';
const rootReducer = combineReducers({
    products: productReducer
});

export default rootReducer;