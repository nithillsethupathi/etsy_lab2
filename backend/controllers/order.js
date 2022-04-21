import Order from "../models/order.js"
import jwt from "jsonwebtoken";

export const createOrder = async (req, res)  => {
    const order = req.body;
    const newOrder = new Order(order);
    const token = req.headers["authorization"];
    let decodedData;
    decodedData = jwt.verify(token, 'test');
    try {
        await newOrder.save();
        return res.status(201).json(newOrder);
    } catch (error){
        return res.status(409).json({message: error.message});
    }
}