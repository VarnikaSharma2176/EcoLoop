import User from "../models/user.model.js";

export const getAddressesService = async (userId) => {
  const user = await User.findById(userId).select("addresses");

  return user.addresses;
};

export const addAddressService = async (userId, address) => {
  const user = await User.findById(userId);

  if (address.isDefault) {
    user.addresses.forEach((addr) => {
      addr.isDefault = false;
    });
  }

  user.addresses.push(address);

  await user.save();

  return user.addresses;
};

export const updateAddressService = async (
  userId,
  addressId,
  updatedAddress
) => {
  const user = await User.findById(userId);

  const address = user.addresses.id(addressId);

  if (!address) {
    throw new Error("Address not found.");
  }

  if (updatedAddress.isDefault) {
    user.addresses.forEach((addr) => {
      addr.isDefault = false;
    });
  }

  Object.assign(address, updatedAddress);

  await user.save();

  return user.addresses;
};

export const deleteAddressService = async (
  userId,
  addressId
) => {
  const user = await User.findById(userId);

  const address = user.addresses.id(addressId);

  if (!address) {
    throw new Error("Address not found.");
  }

  address.deleteOne();

  await user.save();

  return user.addresses;
};

export const setDefaultAddressService = async (
  userId,
  addressId
) => {
  const user = await User.findById(userId);

  user.addresses.forEach((address) => {
    address.isDefault = address._id.toString() === addressId;
  });

  await user.save();

  return user.addresses;
};