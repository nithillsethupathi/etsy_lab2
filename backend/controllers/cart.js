import mongoose from "mongoose";
import Cart from "../models/cart.js";
import make_request from "../kafka/client.js";

export const getCart = async (req, res) => {
    try {
        const cart = await Cart.find();
        return res.status(200).json(cart);
    } catch (error) {
        return res.status(404).json({message: error.message});
    }
}


export const createCart = async (req, res) => {
    const cart = req.body;

    const newCart = new Cart(cart);

    try{
        await newCart.save();
        return res.status(201).json(newCart);
    } catch (error){
        return res.status(409).json({message: error.message});
    }

}

export const deleteAll = async (req, res) => {
    const {user_id} = req.body;
     const del = await Cart.deleteMany({user_id: user_id});
    return res.json(del);
}

export const deleteCart = async (req, res) => {

    const {productId} = req.body;
    const deleteItem = await Cart.findOneAndDelete({_id: productId});
    return res.json(deleteItem);
}