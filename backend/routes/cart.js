import express from "express";
import { getCart, createCart, deleteCart, deleteAll} from '../controllers/cart.js'
import auth from "../middleware/auth.js"

const router = express.Router();

router.post('/createCart', createCart);
router.get('/getCart', getCart);
router.post('/deleteAll', deleteAll);
router.post('/deleteCart', deleteCart);
export default router;