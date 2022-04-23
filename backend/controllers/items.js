import mongoose from "mongoose";
import ItemMessage from "../models/itemMessage.js";
import make_request from "../kafka/client.js";

export const getItems = async (req, res) => {
    try {
        const itemMessages = await ItemMessage.find();
        return res.status(200).json(itemMessages);
    } catch (error) {
        return res.status(404).json({message: error.message});
    }
}

export const getItem = async (req, res) => {
    const {id} = req.params;
    try {
        const item = await ItemMessage.findById(id);
        return res.status(200).json(item);
    } catch (error) {
        return res.status(404).json({message: error.message});
    }
}

export const createItem = async (req, res) => {

    make_request('post_item',req.body, function(err,results){
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

export const updateItem = async (req, res) => {
    const { id: _id } = req.params;
    const item = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("No item with that ID");

    const updatedItem = await ItemMessage.findByIdAndUpdate(_id, item, { new: true } );
    return res.json(updatedItem);
}