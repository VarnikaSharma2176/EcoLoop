import mongoose from "mongoose";

const pickupItemSchema = new mongoose.Schema(
  {
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },

    quantity: {
      type: Number,
      required: true,
      min: 1,
    },

    description: {
      type: String,
      default: "",
      trim: true,
    },
  },
  { _id: false }
);

const timelineSchema = new mongoose.Schema(
  {
    status: {
      type: String,
      enum: [
        "Pending",
        "Assigned",
        "Accepted",
        "Collected",
        "Delivered",
        "Completed",
        "Cancelled",
      ],
      required: true,
    },

    updatedAt: {
      type: Date,
      default: Date.now,
    },

    updatedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    note: {
      type: String,
      default: "",
      trim: true,
    },
  },
  { _id: false }
);

const pickupSchema = new mongoose.Schema(
  {
    citizen: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    collector: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },

    items: {
      type: [pickupItemSchema],
      validate: {
        validator: (items) => items.length > 0,
        message: "At least one item is required.",
      },
    },

    pickupAddress: {
      label: String,
      recipientName: String,
      phone: String,
      addressLine1: String,
      addressLine2: String,
      city: String,
      state: String,
      pincode: String,
    },

    preferredDate: {
      type: Date,
      required: true,
    },

    preferredTimeSlot: {
      type: String,
      required: true,
    },

    status: {
      type: String,
      enum: [
        "Pending",
        "Assigned",
        "Accepted",
        "Collected",
        "Delivered",
        "Completed",
        "Cancelled",
      ],
      default: "Pending",
    },

    timeline: [timelineSchema],

    rewardPointsEarned: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Pickup = mongoose.model("Pickup", pickupSchema);

export default Pickup;