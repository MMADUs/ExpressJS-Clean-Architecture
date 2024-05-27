import express from "express";
import {
  CreateProduct,
  GetProducts,
  GetProductById,
  UpdateProduct,
  DeleteProduct,
} from "../controller/product-controller.js";

const router = express.Router();

router.post("/create", CreateProduct);
router.get("/all", GetProducts);
router.get("/get/:id", GetProductById);
router.patch("/update/:id", UpdateProduct);
router.delete("/delete/:id", DeleteProduct);

export default router;
