import mongoose from 'mongoose';

const cart = mongoose.Schema({
    title: String,
    image: String,
    price: Number,
    user_id: String
});

const Cart = mongoose.model('Cart', cart);

export default Cart;