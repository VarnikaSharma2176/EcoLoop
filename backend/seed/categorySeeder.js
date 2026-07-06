import dotenv from "dotenv";
import mongoose from "mongoose";
import connectDB from "../src/config/db.js";
import Category from "../src/models/category.model.js";

dotenv.config();

const categories = [
  {
    name: "Laptop",
    description: "Laptops and notebooks",
    icon: "💻",
    rewardPointsPerUnit: 80,
  },
  {
    name: "Desktop Computer",
    description: "Desktop CPUs",
    icon: "🖥️",
    rewardPointsPerUnit: 100,
  },
  {
    name: "Monitor",
    description: "LCD, LED and CRT monitors",
    icon: "🖥️",
    rewardPointsPerUnit: 40,
  },
  {
    name: "Keyboard",
    description: "Computer keyboards",
    icon: "⌨️",
    rewardPointsPerUnit: 10,
  },
  {
    name: "Mouse",
    description: "Computer mouse",
    icon: "🖱️",
    rewardPointsPerUnit: 10,
  },
  {
    name: "Printer",
    description: "Printers and multifunction devices",
    icon: "🖨️",
    rewardPointsPerUnit: 50,
  },
  {
    name: "Scanner",
    description: "Scanners",
    icon: "📠",
    rewardPointsPerUnit: 35,
  },
  {
    name: "Smartphone",
    description: "Mobile phones",
    icon: "📱",
    rewardPointsPerUnit: 30,
  },
  {
    name: "Tablet",
    description: "Tablets and iPads",
    icon: "📱",
    rewardPointsPerUnit: 40,
  },
  {
    name: "Smartwatch",
    description: "Wearable smart devices",
    icon: "⌚",
    rewardPointsPerUnit: 20,
  },
  {
    name: "Power Bank",
    description: "Portable chargers",
    icon: "🔋",
    rewardPointsPerUnit: 15,
  },
  {
    name: "Charger",
    description: "Laptop and mobile chargers",
    icon: "🔌",
    rewardPointsPerUnit: 8,
  },
  {
    name: "Television",
    description: "LED, LCD and CRT TVs",
    icon: "📺",
    rewardPointsPerUnit: 100,
  },
  {
    name: "Refrigerator",
    description: "Domestic refrigerators",
    icon: "🧊",
    rewardPointsPerUnit: 150,
  },
  {
    name: "Washing Machine",
    description: "Automatic and semi-automatic washing machines",
    icon: "🧺",
    rewardPointsPerUnit: 120,
  },
  {
    name: "Microwave Oven",
    description: "Microwave ovens",
    icon: "🍽️",
    rewardPointsPerUnit: 70,
  },
  {
    name: "Air Conditioner",
    description: "Window and split AC units",
    icon: "❄️",
    rewardPointsPerUnit: 180,
  },
  {
    name: "Battery",
    description: "Rechargeable batteries",
    icon: "🔋",
    rewardPointsPerUnit: 12,
  },
  {
    name: "Cables & Wires",
    description: "Electrical wires and cables",
    icon: "🧵",
    rewardPointsPerUnit: 5,
  },
  {
    name: "Router / Modem",
    description: "Networking devices",
    icon: "📡",
    rewardPointsPerUnit: 25,
  }
];

const seedCategories = async () => {
  try {
    await connectDB();

    await Category.deleteMany();

    await Category.insertMany(categories);

    console.log("✅ Categories seeded successfully.");

    mongoose.connection.close();
  } catch (error) {
    console.error(error);

    mongoose.connection.close();
  }
};

seedCategories();