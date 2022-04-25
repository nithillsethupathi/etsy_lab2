import Order from "../models/order.js"

export const createOrder = async (req, res)  => {
    const order = req.body;
    console.log(order);
    const newOrder = new Order(order);
    try {
        await newOrder.save();
        return res.status(201).json(newOrder);
    } catch (error){
        return res.status(409).json({message: error.message});
    }
}

export const getOrder = async (req, res)  => {
    try {
        const order = await Order.find();
        return res.status(200).json(order);
    } catch (error){
        return res.status(409).json({message: error.message});
    }
}