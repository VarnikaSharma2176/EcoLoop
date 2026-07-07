import express from "express";
import {
  createPickup,
  getMyPickups,
  getPickupById,
  updatePickupStatus,
  getAssignedPickups,
  assignCollector,
} from "../controllers/pickup.controller.js";

import {
  protect,
  authorize,
} from "../middleware/auth.middleware.js";
const router = express.Router();

router.post("/", protect, createPickup);

router.get("/my", protect, getMyPickups);

router.get(
  "/assigned",
  protect,
  authorize("collector"),
  getAssignedPickups
);

router.patch(
  "/:id/assign",
  protect,
  authorize("admin"),
  assignCollector
);

router.patch(
  "/:id/status",
  protect,
  authorize("collector", "admin"),
  updatePickupStatus
);

router.get("/:id", protect, getPickupById);

export default router;