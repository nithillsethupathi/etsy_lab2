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

    make_request('post_cart',req.body, function(err,results){
        console.log('in result');
        console.log(results);
        if (err){
            console.log("Inside err");
            res.json({
                status:"error",
                msg:"System Error, Try Again."
            })
        }else{
            console.log("Inside else");
                res.json({
                    updatedList:results
                });
            }
        
    });

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