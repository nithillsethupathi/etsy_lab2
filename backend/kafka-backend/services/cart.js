import Cart from "../models/cart"

export const Cart = async(msg, callback) => {
   
    console.log("Inside cart kafka backend");
    console.log(msg);
    const carts = await new Cart(msg);
    await carts.save();
    console.log(msg);
    callback(null, carts);
    console.log("after callback");
};