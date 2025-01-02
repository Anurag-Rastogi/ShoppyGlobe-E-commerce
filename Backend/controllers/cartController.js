import Cart from "../models/Cart.js";

export const addToCart = async (req, res) => {
  try {
    const { productId, quantity } = req.body; // Extract productId and quantity from request body
    const userId = req.user.id; // Get userId from authenticated user

    // Validate input
    if (!productId || !quantity || quantity <= 0) {
      return res.status(400).json({ error: "Product ID and valid quantity are required" });
    }

    let cart = await Cart.findOne({ userId });

    // If cart does not exist, create a new cart
    if (!cart) {
      cart = new Cart({
        userId,
        products: [{ productId, quantity }]  // Store in 'products' array
      });
    } else {
      // If cart exists, check if the product already exists in the cart
      const itemIndex = cart.products.findIndex(
        (item) => item.productId.toString() === productId.toString()
      );

      // If item exists, update its quantity
      if (itemIndex >= 0) {
        cart.products[itemIndex].quantity += quantity;
      } else {
        // If item doesn't exist, add it to the cart
        cart.products.push({ productId, quantity });
      }
    }

    const savedCart = await cart.save();
    res.status(200).json(savedCart);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


export const removeCartItem = async (req, res) => {
  try {
    const { id } = req.params; // Cart item ID to remove
    const userId = req.user.id; // Get userId from authenticated user

    // Find the cart for the user
    const cart = await Cart.findOne({ userId });
    if (!cart) {
      return res.status(404).json({ error: "Cart not found" });
    }

    // Find the item to remove
    const itemIndex = cart.products.findIndex(
      (item) => item._id.toString() === id
    );
    if (itemIndex === -1) {
      return res.status(404).json({ error: "Item not found in cart" });
    }

    // Remove the item from the cart
    cart.products.splice(itemIndex, 1);
    await cart.save();

    res.status(200).json({ message: "Item removed from cart" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


export const updateCartItem = async (req, res) => {
  try {
    const { id } = req.params; // Cart item ID to update
    const { quantity } = req.body; // New quantity

    // Validate the quantity input
    if (!quantity || quantity <= 0) {
      return res.status(400).json({ error: "Quantity must be greater than 0" });
    }

    const userId = req.user.id; // Get userId from authenticated user

    // Find the cart for the user
    const cart = await Cart.findOne({ userId });
    if (!cart) {
      return res.status(404).json({ error: "Cart not found" });
    }

    // Find the item in the cart to update
    const item = cart.products.find((item) => item._id.toString() === id);
    if (!item) {
      return res.status(404).json({ error: "Item not found in cart" });
    }

    // Update the item's quantity
    item.quantity = quantity;
    await cart.save();

    res.status(200).json({ message: "Cart item updated successfully", cart });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
