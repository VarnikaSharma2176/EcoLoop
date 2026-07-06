import validator from "validator";

export const validateRegister = (data) => {
  const {
    fullName,
    email,
    phone,
    password,
    accountType,
    organizationName,
  } = data;

  if (!fullName || fullName.trim().length < 3) {
    throw new Error("Full name must contain at least 3 characters.");
  }

  if (!email || !validator.isEmail(email)) {
    throw new Error("Please enter a valid email address.");
  }

  if (!phone || !validator.isMobilePhone(phone, "en-IN")) {
    throw new Error("Please enter a valid Indian mobile number.");
  }

  if (
    !password ||
    !validator.isStrongPassword(password, {
      minLength: 8,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 0,
    })
  ) {
    throw new Error(
      "Password must contain at least 8 characters, one uppercase letter, one lowercase letter and one number."
    );
  }

  if (!["individual", "organization"].includes(accountType)) {
    throw new Error("Invalid account type.");
  }

  if (
    accountType === "organization" &&
    (!organizationName || organizationName.trim().length < 2)
  ) {
    throw new Error("Organization name is required.");
  }

  return true;
};

export const validateLogin = (data) => {
  const { email, password } = data;

  if (!email || !validator.isEmail(email)) {
    throw new Error("Invalid email.");
  }

  if (!password) {
    throw new Error("Password is required.");
  }

  return true;
};