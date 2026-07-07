import {
  getAllUsersService,
  getAllPickupsService,
  getDashboardStatsService,
} from "../services/admin.service.js";

export const getAllUsers = async (req, res) => {
  try {
    const users = await getAllUsersService();

    res.status(200).json({
      success: true,
      message: "Users fetched successfully.",
      data: users,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getAllPickups = async (req, res) => {
  try {
    const pickups = await getAllPickupsService();

    res.status(200).json({
      success: true,
      message: "Pickups fetched successfully.",
      data: pickups,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getDashboardStats = async (req, res) => {
  try {
    const stats = await getDashboardStatsService();

    res.status(200).json({
      success: true,
      message: "Dashboard stats fetched successfully.",
      data: stats,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};