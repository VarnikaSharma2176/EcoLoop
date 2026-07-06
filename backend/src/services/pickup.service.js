import Pickup from "../models/pickup.model.js";

export const createPickupService = async (pickupData, userId) => {
  const User = (await import("../models/user.model.js")).default;

  const user = await User.findById(userId);

  let finalAddress;

  if (pickupData.addressType === "saved") {
    const savedAddress = user.addresses.id(
      pickupData.savedAddressId
    );

    if (!savedAddress) {
      throw new Error("Saved address not found.");
    }

    finalAddress = savedAddress.toObject();
  } else {
    finalAddress = pickupData.pickupAddress;

    if (pickupData.saveNewAddress) {
      user.addresses.push({
        ...pickupData.pickupAddress,
        label: pickupData.addressLabel,
      });

      await user.save();
    }
  }

  const pickup = await Pickup.create({
    citizen: userId,

    items: pickupData.items,

    pickupAddress: finalAddress,

    preferredDate: pickupData.preferredDate,

    preferredTimeSlot: pickupData.preferredTimeSlot,

    timeline: [
      {
        status: "Pending",
        note: "Pickup request created.",
        updatedBy: userId,
      },
    ],
  });

  return pickup;
};

export const getMyPickupsService = async (userId) => {
  return await Pickup.find({
    citizen: userId,
  })
    .populate("items.category", "name icon")
    .sort({
      createdAt: -1,
    });
};

export const getPickupByIdService = async (pickupId, userId) => {
  return await Pickup.findOne({
    _id: pickupId,
    citizen: userId,
  }).populate("items.category", "name icon rewardPointsPerUnit");
};