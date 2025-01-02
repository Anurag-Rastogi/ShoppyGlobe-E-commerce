import Product from "../models/Product.js";

// Existing Controllers
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ error: "Product not found" });
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// New Controller to Add a Product
export const addProduct = async (req, res) => {
  try {
    const { title, category, description, price, image, stock } = req.body;

    // Validate Required Fields
    if (!title || !category || !description || !price || !image || stock === undefined) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Create a New Product Instance
    const newProduct = new Product({
      title,
      category,
      description,
      price,
      image,
      stock,
    });

    // Save the Product to MongoDB
    const savedProduct = await newProduct.save();

    res.status(201).json({
      message: "Product added successfully",
      product: savedProduct,
    });
  } catch (error) {
    // Handle Duplicate Entries (e.g., unique fields)
    if (error.code === 11000) {
      return res.status(400).json({ error: "Duplicate field value entered" });
    }
    res.status(500).json({ error: error.message });
  }
};
