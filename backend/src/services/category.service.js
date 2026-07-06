import Category from "../models/category.model.js";

export const getAllCategoriesService = async () => {
  return await Category.find({ isActive: true }).sort({ name: 1 });
};