import express from "express";
import {
  createPickup,
  getMyPickups,
  getPickupById,
  updatePickupStatus,
} from "../controllers/pickup.controller.js";

import { protect } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/", protect, createPickup);

router.get("/my", protect, getMyPickups);

router.patch("/:id/status", protect, updatePickupStatus);

router.get("/:id", protect, getPickupById);

export default router;