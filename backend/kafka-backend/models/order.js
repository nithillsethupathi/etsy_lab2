import mongoose from 'mongoose';
import Inc from "mongoose-sequence";

const AutoIncrement = Inc(mongoose); 


const orderSchema = mongoose.Schema({
    orderTotal: Number
});

orderSchema.plugin(AutoIncrement, {inc_field: 'orderNo'})
const Order = mongoose.model('Order', orderSchema);

export default Order;