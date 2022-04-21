import {FETCH_ITEM, FETCH_ALL, CREATE} from "../constants/actionTypes";
import * as api from '../api';

export const getItem = (id) => async (dispatch) => {

    try {
        const {data} = await api.fetchItem(id);
        dispatch({type: FETCH_ITEM, payload: data});
    } catch (error) {
        console.log(error.message);
    }

}


export const getItems = () => async (dispatch) => {

    try {
        const {data} = await api.fetchItems();
        dispatch({type: FETCH_ALL, payload: data});
    } catch (error) {
        console.log(error.message);
    }

}

export const createItem = (item) => async (dispatch) => {
    try {
        const {data} = await api.createItem(item);

        dispatch({type: CREATE, payload: data});
    } catch (error) {
        console.log(error);
    }
}

export const createFav = (itemId) => async (dispatch) => {
    try {
        const {data} = await api.createFav(itemId);

        dispatch({type: CREATE, payload: data});
    } catch (error) {
        console.log(error);
    }
}