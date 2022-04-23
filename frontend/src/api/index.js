import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' })

export const fetchItem = (id) => API.get(`/items/${id}`);
export const fetchItems = () => API.get('/items');
export const updateUser = (id) => API.post(`/user/${id}`)
export const createItem = (newItem) => API.post('/items', newItem);
export const createShop = (shop) => API.post('/shop', shop);
export const createFav = (fav) => API.post('/items/fav', fav);
export const createOrder = (order) => API.post('/orders/createOrder', order);
export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);