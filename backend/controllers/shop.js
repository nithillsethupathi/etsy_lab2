import Shop from "../models/shop.js";

export const createShopName = async(req, res) => {
    const {shopName} = req.body;
    const shop = req.body;
    console.log(shop)
    let unavailable = await Shop.findOne({"shopName": shopName});
    if(unavailable){
        res.status(500).json({message: "Shop not available"})
    } else{
        const newShop = new Shop(shop);
        await newShop.save()
        res.status(201).json(newShop)
    }
}