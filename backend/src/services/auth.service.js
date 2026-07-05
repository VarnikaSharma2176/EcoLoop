import User from "../models/user.model.js";
import generateToken from "../utils/generateToken.js";

export const registerUserService = async (userData) => {
  const {
    fullName,
    email,
    phone,
    password,
    accountType,
    organizationName,
  } = userData;

  const existingEmail = await User.findOne({ email });

  if (existingEmail) {
    throw new Error("Email already registered.");
  }

  const existingPhone = await User.findOne({ phone });

  if (existingPhone) {
    throw new Error("Phone number already registered.");
  }

  const user = await User.create({
    fullName,
    email,
    phone,
    password,
    accountType,
    organizationName:
      accountType === "organization" ? organizationName : "",
  });

  return user;
};

export const loginUserService = async ({ email, password }) => {
  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    throw new Error("Invalid email or password.");
  }

  const isMatch = await user.comparePassword(password);

  if (!isMatch) {
    throw new Error("Invalid email or password.");
  }

  const token = generateToken(user._id, user.role);

  return {
    token,
    user,
  };
};