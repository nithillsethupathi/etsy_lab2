import express from "express";
import { createShopName } from '../controllers/shop.js'
import auth from "../middleware/auth.js"

const router = express.Router();
router.post('/', auth, createShopName);

export default router;