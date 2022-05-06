import * as actionTypes from './products-types';
const products = require('../../products.json');
const INITIAL_STATE = [
    ...products,
]
const productsReducer = (state = INITIAL_STATE,action) => {
    switch (action.type) {
        case actionTypes.ADD_PRODUCT:
            const item = action.payload.item;
            state.push(item);
            return [
                ...state,
            ]

        case actionTypes.DELETE_PRODUCT:
            const toRemove = action.payload.product;
            const idx = state.map(it => it.product).indexOf(toRemove);
            if(idx!==-1)
                state.splice(idx,1);
            return [
                ...state,
            ]
        case actionTypes.ADJUST_QTY:
            return {};
        default:
            return state;
    }
}

export default productsReducer;