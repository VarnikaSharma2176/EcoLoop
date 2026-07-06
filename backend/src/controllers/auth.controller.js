import {
  registerUserService,
  loginUserService,
} from "../services/auth.service.js";
import {
  validateRegister,
  validateLogin,
} from "../validators/auth.validator.js";

export const registerUser = async (req, res) => {
  try {
    validateRegister(req.body);
    const user = await registerUserService(req.body);

    res.status(201).json({
      success: true,
      message: "User registered successfully.",
      data: {
        id: user._id,
        fullName: user.fullName,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
      errors: [],
    });
  }
};

export const loginUser = async (req, res) => {
  try {
    validateLogin(req.body);
    const { token, user } = await loginUserService(req.body);

    res.status(200).json({
      success: true,
      message: "Login successful.",
      data: {
        token,
        user: {
          id: user._id,
          fullName: user.fullName,
          email: user.email,
          role: user.role,
        },
      },
    });
  } catch (error) {
    res.status(401).json({
      success: false,
      message: error.message,
      errors: [],
    });
  }
};