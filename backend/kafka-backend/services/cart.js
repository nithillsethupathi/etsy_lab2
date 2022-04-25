import Cart from "../models/cart.js"

export const ccart = async(msg, callback) => {
   
    console.log("Inside cart kafka backend");
    const carts = await new Cart(msg);
    await carts.save();
    console.log(carts);
    callback(null, carts);
    console.log("after callback");
};