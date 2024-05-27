import prisma from "../../config/prisma-config.js";

export default class ProductService {
  constructor() {
    //empty for now
  }

  async createProduct(payload) {
    const { name, price, category_id } = payload;
    try {
      const product = await prisma.products.create({
        data: {
          name,
          price,
          category_id,
        },
      });
      return product;
    } catch (error) {
      throw new Error("Failed to create product : ", error.message);
    }
  }

  async getProducts() {
    try {
      const products = await prisma.products.findMany();
      return products;
    } catch (error) {
      throw new Error("Failed to retrieve products : ", error.message);
    }
  }

  async getProductById(product_id) {
    try {
      const product = await prisma.products.findUnique({
        where: { id: product_id },
      });
      return product;
    } catch (error) {
      throw new Error("Failed to retrieve product by ID : ", error.message);
    }
  }

  async updateProduct(product_id, payload) {
    const { name, price, category_id } = payload;
    try {
      const updatedProduct = await prisma.products.update({
        where: { id: product_id },
        data: {
          name,
          price,
          category_id,
        },
      });
      return updatedProduct;
    } catch (error) {
      throw new Error("Failed to update product : ", error.message);
    }
  }

  async deleteProduct(product_id) {
    try {
      const deletedProduct = await prisma.products.delete({
        where: { id: product_id },
      });
      return deletedProduct;
    } catch (error) {
      throw new Error("Failed to delete product : ", error.message);
    }
  }
}
