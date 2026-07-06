import {
  getAddressesService,
  addAddressService,
  updateAddressService,
  deleteAddressService,
  setDefaultAddressService,
} from "../services/address.service.js";

export const getAddresses = async (req, res) => {
  try {
    const addresses = await getAddressesService(req.user._id);

    res.status(200).json({
      success: true,
      message: "Addresses fetched successfully.",
      data: addresses,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
      errors: [],
    });
  }
};

export const addAddress = async (req, res) => {
  try {
    const addresses = await addAddressService(
      req.user._id,
      req.body
    );

    res.status(201).json({
      success: true,
      message: "Address added successfully.",
      data: addresses,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
      errors: [],
    });
  }
};

export const updateAddress = async (req, res) => {
  try {
    const addresses = await updateAddressService(
      req.user._id,
      req.params.id,
      req.body
    );

    res.status(200).json({
      success: true,
      message: "Address updated successfully.",
      data: addresses,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
      errors: [],
    });
  }
};

export const deleteAddress = async (req, res) => {
  try {
    const addresses = await deleteAddressService(
      req.user._id,
      req.params.id
    );

    res.status(200).json({
      success: true,
      message: "Address deleted successfully.",
      data: addresses,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
      errors: [],
    });
  }
};

export const setDefaultAddress = async (req, res) => {
  try {
    const addresses = await setDefaultAddressService(
      req.user._id,
      req.params.id
    );

    res.status(200).json({
      success: true,
      message: "Default address updated successfully.",
      data: addresses,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
      errors: [],
    });
  }
};