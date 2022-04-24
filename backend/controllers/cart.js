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

    const newCart = new ItemMessage(cart);

    try{
        await newCart.save();
        return res.status(201).json(newCart);
    } catch (error){
        return res.status(409).json({message: error.message});
    }

}

export const deleteAll = async (req, res) => {
    const { id: _id } = req.params;
    const item = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("No item with that ID");

    const updatedItem = await ItemMessage.findByIdAndUpdate(_id, item, { new: true } );
    return res.json(updatedItem);
}

export const deleteCart = async (req, res) => {
    const { id: _id } = req.params;
    const item = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("No item with that ID");

    const updatedItem = await ItemMessage.findByIdAndUpdate(_id, item, { new: true } );
    return res.json(updatedItem);
}