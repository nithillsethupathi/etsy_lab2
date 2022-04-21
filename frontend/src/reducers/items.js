import {FETCH_ITEM, FETCH_ALL, CREATE} from "../constants/actionTypes";

export default (items = [], action) => {
    switch (action.type) {
        case FETCH_ALL:
            return action.payload;
        case CREATE:
            return [...items, action.payload];
        case FETCH_ITEM:
            return action.payload;
        default:
            return items;
    }
}