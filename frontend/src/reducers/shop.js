import {FETCH_SHOP, CREATE} from "../constants/actionTypes";

export default (shop = [], action) => {
    switch (action.type) {
        case FETCH_SHOP:
            return shop.payload;
        case CREATE:
            return [...shop, action.payload];
        default:
            return shop;
    }
}