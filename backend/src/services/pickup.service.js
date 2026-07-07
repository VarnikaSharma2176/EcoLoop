import Pickup from "../models/pickup.model.js";
import User from "../models/user.model.js";
import Category from "../models/category.model.js";

export const createPickupService = async (pickupData, userId) => {
  const user = await User.findById(userId);

  if (!user) {
    throw new Error("User not found.");
  }

  let finalAddress;

  if (pickupData.savedAddressId) {
    const savedAddress = user.addresses.id(pickupData.savedAddressId);

    if (!savedAddress) {
      throw new Error("Saved address not found.");
    }

    finalAddress = savedAddress.toObject();
  } else if (pickupData.pickupAddress) {
    finalAddress = pickupData.pickupAddress;
  } else {
    throw new Error("Pickup address is required.");
  }

  const pickup = await Pickup.create({
    citizen: userId,
    items: pickupData.items,
    pickupAddress: finalAddress,
    preferredDate: pickupData.preferredDate,
    preferredTimeSlot: pickupData.preferredTimeSlot,
    status: "Pending",
    timeline: [
      {
        status: "Pending",
        note: "Pickup request created.",
        updatedBy: userId,
      },
    ],
  });

  return pickup.populate("items.category", "name icon");
};

export const getMyPickupsService = async (userId) => {
  return Pickup.find({ citizen: userId })
    .populate("items.category", "name icon")
    .populate("collector", "fullName")
    .sort({ createdAt: -1 });
};

export const getPickupByIdService = async (pickupId, userId) => {
  return Pickup.findOne({
    _id: pickupId,
    citizen: userId,
  })
    .populate("items.category")
    .populate("collector", "fullName");
};

export const updatePickupStatusService = async (
  pickupId,
  status,
  note,
  userId
) => {
  const pickup = await Pickup.findById(pickupId)
    .populate("items.category");

  if (!pickup) {
    throw new Error("Pickup not found.");
  }

  pickup.status = status;

  pickup.timeline.push({
    status,
    note,
    updatedBy: userId,
  });

  if (status === "Completed") {
    let totalPoints = 0;

    pickup.items.forEach((item) => {
      totalPoints +=
        item.quantity * item.category.rewardPointsPerUnit;
    });

    pickup.rewardPointsEarned = totalPoints;

    const citizen = await User.findById(pickup.citizen);

    citizen.rewardPoints += totalPoints;

    await citizen.save();
  }

  await pickup.save();

  return pickup;
};

export const getAssignedPickupsService = async (collectorId) => {
  return Pickup.find({
    collector: collectorId,
  })
    .populate("citizen", "fullName email phone")
    .populate("items.category", "name icon")
    .sort({ createdAt: -1 });
};

export const assignCollectorService = async (
  pickupId,
  collectorId,
  adminId
) => {
  const pickup = await Pickup.findById(pickupId);

  if (!pickup) {
    throw new Error("Pickup not found.");
  }

  pickup.collector = collectorId;
  pickup.status = "Assigned";

  pickup.timeline.push({
    status: "Assigned",
    note: "Collector assigned.",
    updatedBy: adminId,
  });

  await pickup.save();

  return pickup;
};