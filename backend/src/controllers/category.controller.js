import { getAllCategoriesService } from "../services/category.service.js";

export const getCategories = async (req, res) => {
  try {
    const categories = await getAllCategoriesService();

    res.status(200).json({
      success: true,
      message: "Categories fetched successfully.",
      data: categories,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
      errors: [],
    });
  }
};