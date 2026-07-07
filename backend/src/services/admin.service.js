import User from "../models/user.model.js";
import Pickup from "../models/pickup.model.js";

export const getAllUsersService = async () => {
  return User.find({})
    .select("-password")
    .sort({ createdAt: -1 });
};

export const getAllPickupsService = async () => {
  return Pickup.find({})
    .populate("citizen", "fullName email phone")
    .populate("collector", "fullName")
    .populate("items.category", "name icon")
    .sort({ createdAt: -1 });
};

export const getDashboardStatsService = async () => {
  const totalUsers = await User.countDocuments();
  const totalCitizens = await User.countDocuments({ role: "citizen" });
  const totalCollectors = await User.countDocuments({ role: "collector" });

  const totalPickups = await Pickup.countDocuments();
  const pendingPickups = await Pickup.countDocuments({ status: "Pending" });
  const completedPickups = await Pickup.countDocuments({ status: "Completed" });

  return {
    totalUsers,
    totalCitizens,
    totalCollectors,
    totalPickups,
    pendingPickups,
    completedPickups,
  };
};