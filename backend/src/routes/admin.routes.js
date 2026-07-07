import express from "express";

import {
  getAllUsers,
  getAllPickups,
  getDashboardStats,
} from "../controllers/admin.controller.js";

import {
  protect,
  authorize,
} from "../middleware/auth.middleware.js";

const router = express.Router();

router.use(protect);
router.use(authorize("admin"));

router.get("/users", getAllUsers);

router.get("/pickups", getAllPickups);

router.get("/dashboard", getDashboardStats);

export default router;