import CategoryService from "../service/category-service.js";

const categoryService = new CategoryService();

export const CreateCategory = async (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ message: "Category name is required." });
  }

  try {
    const category = await categoryService.createCategory(name);
    res.status(201).json(category);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to add category.", error: error.message });
  }
};