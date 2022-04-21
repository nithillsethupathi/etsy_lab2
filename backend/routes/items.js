import express from "express";
import { getItems, getItem, createItem, updateItem } from '../controllers/items.js'
import auth from "../middleware/auth.js"

const router = express.Router();

router.get('/', getItems);
router.get('/:id', getItem);
router.post('/', auth, createItem);
router.patch('/:id', auth, updateItem);
export default router;