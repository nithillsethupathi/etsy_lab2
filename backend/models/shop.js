import mongoose from 'mongoose';

const shopSchema = mongoose.Schema({
    shopName: {type: String, requires: true, unique: true},
    userId: {type: String, requires: true}
})

const Shop = mongoose.model('Shop', shopSchema);
export default Shop;