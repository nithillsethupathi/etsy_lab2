import Order from "../models/Order.js"

export const Orders = async(msg, callback) => {
   
    console.log("Inside order kafka backend");
    console.log(msg);
    const orders = await new Order(msg);
    await orders.save();
    console.log(msg);
    callback(null, orders);
    console.log("after callback");
};