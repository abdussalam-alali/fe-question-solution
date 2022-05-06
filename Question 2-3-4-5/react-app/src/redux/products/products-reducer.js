import * as actionTypes from './products-types';
const products = require('../../products.json');
const INITIAL_STATE = {
    items: products,
}
const productsReducer = (state = INITIAL_STATE,action) => {
    switch (action.type) {
        case actionTypes.ADD_PRODUCT:
            return {};
        case actionTypes.DELETE_PRODUCT:
            return {};
        case actionTypes.ADJUST_QTY:
            return {};
        default:
            return state;
    }
}

export default productsReducer;