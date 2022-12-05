import express from "express";
import { createOrder, updateOrder, listOrders, searchOrder, deleteOrder } from "../controllers/order-controller.js";

const router = express.Router();

router.post('/orders/create', createOrder)
router.post, ('/orders/update/:id', updateOrder)
router.get('/orders/list', listOrders)
router.get('/orders/search', searchOrder)
router.delete('/orders/delete/:id', deleteOrder)

export default router;
