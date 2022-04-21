import mongoose from 'mongoose';

const itemSchema = mongoose.Schema({
    title: String,
    image: String,
    category: String,
    price: Number,
    description: String,
    quantity: Number,
    user_id: String
});

const ItemMessage = mongoose.model('ItemMessage', itemSchema);

export default ItemMessage;