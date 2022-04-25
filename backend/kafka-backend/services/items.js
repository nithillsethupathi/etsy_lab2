import ItemMessage from "../models/itemMessage.js"

export const Items = async(msg, callback) => {
   
    console.log("Inside items kafka backend");
    console.log(msg);
    const items = await new ItemMessage(msg);
    await items.save();
    console.log(msg);
    callback(null, items);
    console.log("after callback");
};


