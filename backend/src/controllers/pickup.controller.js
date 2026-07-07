import {
  createPickupService,
  getMyPickupsService,
  getPickupByIdService,
  updatePickupStatusService,
  getAssignedPickupsService,
  assignCollectorService,
} from "../services/pickup.service.js";

export const createPickup = async (req, res) => {
  try {
    const pickup = await createPickupService(req.body, req.user._id);

    res.status(201).json({
      success: true,
      message: "Pickup request created successfully.",
      data: pickup,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
      errors: [],
    });
  }
};

export const getMyPickups = async (req, res) => {
  try {
    const pickups = await getMyPickupsService(req.user._id);

    res.status(200).json({
      success: true,
      message: "Pickups fetched successfully.",
      data: pickups,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
      errors: [],
    });
  }
};

export const getPickupById = async (req, res) => {
  try {
    const pickup = await getPickupByIdService(
      req.params.id,
      req.user._id
    );

    if (!pickup) {
      return res.status(404).json({
        success: false,
        message: "Pickup not found.",
        errors: [],
      });
    }

    res.status(200).json({
      success: true,
      message: "Pickup details fetched successfully.",
      data: pickup,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
      errors: [],
    });
  }
};

export const updatePickupStatus = async (req, res) => {
  try {
    const pickup = await updatePickupStatusService(
      req.params.id,
      req.body.status,
      req.body.note,
      req.user._id
    );

    res.status(200).json({
      success: true,
      message: "Pickup status updated successfully.",
      data: pickup,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
      errors: [],
    });
  }
};

export const getAssignedPickups = async (req, res) => {
  try {
    const pickups = await getAssignedPickupsService(req.user._id);

    res.status(200).json({
      success: true,
      message: "Assigned pickups fetched successfully.",
      data: pickups,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
      errors: [],
    });
  }
};

export const assignCollector = async (req, res) => {
  try {
    const pickup = await assignCollectorService(
      req.params.id,
      req.body.collectorId,
      req.user._id
    );

    res.status(200).json({
      success: true,
      message: "Collector assigned successfully.",
      data: pickup,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
      errors: [],
    });
  }
};