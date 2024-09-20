import express from 'express';
import handleAsyncErr from '../utils/catchAsync.js'
const router = express.Router();
import { addProductToCart, getUsersCart, deleteProductFromCart } from '../controllers/cart.controller.js';
import isLoggedin from '../utils/isLoggedin.js'

router.get("/:userId", handleAsyncErr(getUsersCart));


router.post("/:userId/:productId", handleAsyncErr(addProductToCart));


router.delete("/:userId/:productId", handleAsyncErr(deleteProductFromCart));

export default router;
