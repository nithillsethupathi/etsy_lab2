import ItemMessage from "../models/itemMessage.js"

export const Items = async(msg, callback) => {
   
    console.log("Inside items kafka backend");
    const items = await new ItemMessage(msg);
    await items.save();
    console.log(items);
    callback(null, items);
    console.log("after callback");
};


