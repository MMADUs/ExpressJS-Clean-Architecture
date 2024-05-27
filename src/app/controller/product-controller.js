import vine from "@vinejs/vine";
import ProductService from "../service/product-service.js";
import { productSchema } from "../validation/product-schema.js";

const productService = new ProductService();

export const CreateProduct = async (req, res) => {
  const data = req.body;
  const validator = vine.compile(productSchema);
  try {
    const payload = await validator.validate(data);
    const product = await productService.createProduct(payload);
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({
      message: "Failed to create product.",
      error: error.message,
    });
  }
};

export const GetProducts = async (req, res) => {
  try {
    const products = await productService.getProducts();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({
      message: "Failed to get products.",
      error: error.message,
    });
  }
};

export const GetProductById = async (req, res) => {
  const product_id = parseInt(req.params.id);
  try {
    const product = await productService.getProductById(product_id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({
      message: "Failed to get product.",
      error: error.message,
    });
  }
};

export const UpdateProduct = async (req, res) => {
  const product_id = parseInt(req.params.id);
  const data = req.body;
  const validator = vine.compile(productSchema);
  try {
    const payload = await validator.validate(data);
    const updatedProduct = await productService.updateProduct(
      product_id,
      payload
    );
    res.status(201).json({
      message: "Data successfully updated!",
      updatedProduct,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to update products.",
      error: error.message,
    });
  }
};

export const DeleteProduct = async (req, res) => {
  const product_id = parseInt(req.params.id);
  try {
    const deletedProduct = await productService.deleteProduct(product_id);
    res.status(201).json({
      message: "Data successfully deleted!",
      deletedProduct,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to delete products.",
      error: error.message,
    });
  }
};
