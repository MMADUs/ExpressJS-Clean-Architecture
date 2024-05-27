import prisma from "../../config/prisma-config.js";

export default class CategoryService {
  constructor() {
    //empty for now
  }

  async createCategory(name) {
    try {
      // Create the product in the database using Prisma
      const category = await prisma.category.create({
        data: {
          name,
        },
      });

      return category;
    } catch (error) {
      throw new Error("Failed to create category : ", error.message);
    }
  }
}
