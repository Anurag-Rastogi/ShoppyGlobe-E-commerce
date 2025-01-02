import express from "express";
import {
  addToCart,
  updateCartItem,
  removeCartItem,
} from "../controllers/cartController.js";
import { authenticateToken } from "../middlewares/authMiddleware.js";

const router = express.Router();

// Cart routes, protected by JWT authentication
router.post("/", authenticateToken, addToCart);  // Add item to cart
router.put("/:id", authenticateToken, updateCartItem);  // Update cart item
router.delete("/:id", authenticateToken, removeCartItem);  // Remove item from cart

export default router;

