import * as actionTypes from './products-types';

export const addToProducts = (item) => {
    return {
        type: actionTypes.ADD_PRODUCT,
        payload: {
            product: item.product,
            quantity: item.quantity,
            unitPrice: item.unitPrice,
            type: item.type,
        }
    }
}

export const removeProduct = (productName) =>{
    return {
        type: actionTypes.DELETE_PRODUCT,
        payload: {
            product: productName,
        }
    }
}

export const adjustQty = (productName, newValueQty) =>{
    return {
        type: actionTypes.ADJUST_QTY,
        payload: {
            product: productName,
            quantity: newValueQty
        }
    }
}