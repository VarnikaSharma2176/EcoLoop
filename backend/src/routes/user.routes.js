import express from "express";
import { getProfile } from "../controllers/user.controller.js";
import {
  protect,
  authorize,
} from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/me", protect, getProfile);

router.get(
  "/admin-test",
  protect,
  authorize("admin"),
  (req, res) => {
    res.status(200).json({
      success: true,
      message: "Welcome Admin!",
    });
  }
);

export default router;