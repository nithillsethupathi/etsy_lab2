import mongoose from 'mongoose';


const AutoIncrement = require('mongoose-sequence')(mongoose);

const orderSchema = mongoose.Schema({
    itemId: [{
        type: String
    }],
    orderTotal: Number
});

orderSchema.plugin(AutoIncrement, {inc_field: 'orderNo'})
const Order = mongoose.model('Order', orderSchema);

export default Order;