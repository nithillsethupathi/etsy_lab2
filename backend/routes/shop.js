import express from "express";
import { createShopName } from '../controllers/shop.js'
import auth from "../middleware/auth.js"

const router = express.Router();

router.post('/shop/create', createShopName);
export default router;