import express from "express";
import { createShopName } from '../controllers/shop.js'
import auth from "../middleware/auth.js"

const router = express.Router();
router.post('/', createShopName);
export default router;