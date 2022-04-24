import {ADD_TO_CART, REMOVE_FROM_CART, ADJUST_ITEM_QTY, LOAD_CURRENT_ITEM} from "../constants/actionTypes";

export const addToCart = (itemID) => async (dispatch) => {
    try {
            dispatch({type: ADD_TO_CART, payload: {id: itemID}})
        } catch (error) {
            console.log(error.message);
        }
  };
  
  export const removeFromCart = (itemID) => async (dispatch) => {
    try {
        dispatch({type: REMOVE_FROM_CART, payload: {id: itemID}})
    } catch (error) {
        console.log(error.message);
    }
};
  
  export const adjustItemQty = (itemID, qty) => async (dispatch) => {
    try {
        dispatch({type: REMOVE_FROM_CART, payload: {id: itemID, quantity: qty}})
    } catch (error) {
        console.log(error.message);
    }
};
  
  export const loadCurrentItem = (item) => async (dispatch) => {
    try {
        dispatch({type: REMOVE_FROM_CART, payload: item})
    } catch (error) {
        console.log(error.message);
    }
};