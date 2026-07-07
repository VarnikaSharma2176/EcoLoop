import dotenv from "dotenv";
import mongoose from "mongoose";

import connectDB from "../src/config/db.js";
import User from "../src/models/user.model.js";

dotenv.config();

const seedUsers = async () => {
  try {
    await connectDB();

    // Admin
    const existingAdmin = await User.findOne({
      email: "admin@ecoloop.com",
    });

    if (!existingAdmin) {
      await User.create({
        fullName: "EcoLoop Admin",
        email: "admin@ecoloop.com",
        phone: "9999999999",
        password: "Admin@123",
        role: "admin",
        accountType: "individual",
      });

      console.log("✅ Admin created.");
    } else {
      console.log("ℹ️ Admin already exists.");
    }

    // Collector
    const existingCollector = await User.findOne({
      email: "collector@ecoloop.com",
    });

    if (!existingCollector) {
      await User.create({
        fullName: "Collector One",
        email: "collector@ecoloop.com",
        phone: "8888888888",
        password: "Collector@123",
        role: "collector",
        accountType: "individual",
      });

      console.log("✅ Collector created.");
    } else {
      console.log("ℹ️ Collector already exists.");
    }

    console.log("🎉 Seeding completed.");

    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

seedUsers();