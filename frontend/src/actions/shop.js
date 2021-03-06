import {CREATE} from "../constants/actionTypes"
import * as api from '../api';

export const createShop = (shop) => async (dispatch) => {
    try {
        const {data} = await api.createShop(shop);
        dispatch({type: CREATE, payload: data});
    } catch (error) {
        console.log(error)
    }
}