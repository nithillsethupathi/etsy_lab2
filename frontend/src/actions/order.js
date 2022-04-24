import {FETCH_ORDER, CREATE_ORDER} from "../constants/actionTypes";
import * as api from '../api';

export const getOrder = (id) => async (dispatch) => {

    try {
        const {data} = await api.fetchItem(id);
        dispatch({type: FETCH_ORDER, payload: data});
    } catch (error) {
        console.log(error.message);
    }

}


export const createOrder = (item) => async (dispatch) => {
    try {
        const {data} = await api.createItem(item);

        dispatch({type: CREATE_ORDER, payload: data});
    } catch (error) {
        console.log(error);
    }
}