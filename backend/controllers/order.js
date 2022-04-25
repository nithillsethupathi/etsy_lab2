import Order from "../models/order.js"
import make_request from "../kafka/client.js";

export const createOrder = async (req, res)  => {
    make_request('post_order',req.body, function(err,results){
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

export const getOrder = async (req, res)  => {
    try {
        const order = await Order.find();
        return res.status(200).json(order);
    } catch (error){
        return res.status(409).json({message: error.message});
    }
}