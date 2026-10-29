import UserModel from "../model/User.model.js";
import { sendRes } from "../utils/sendRes.js";
import { generateToken } from "../utils/jwthandle.js";
import bcryptjs from "bcryptjs";

const getCookieOptions = () => {
  const isProduction = process.env.NODE_ENV === "production" || process.env.VERCEL === "1";
  return {
    httpOnly: true,
    sameSite: isProduction ? "none" : "lax",
    secure: isProduction ? true : false,
    maxAge: 2 * 24 * 60 * 60 * 1000,
  };
};

export async function Register(req, res) {
  try {
    const { username, email, password, phone_No, avatar } = req.body;
    if (!username || !email || !password) {
      return sendRes(res, 400, "All fields are required", "error", null);
    }

    const isEmailExist = await UserModel.findOne({
      $or: [{ email }, { username }],
    });

    if (isEmailExist) {
      return sendRes(res, 400, "Email or Username already exists", "error", null);
    }

    const hashedPassword = await bcryptjs.hash(password, 10);

    const user = await UserModel.create({
      username,
      email,
      password: hashedPassword,
      phone_No,
      avatar,
    });

    const token = generateToken({ id: user._id });
    res.cookie("token", token, getCookieOptions());

    return sendRes(res, 201, "Registered Successfully", "success", user);
  } catch (error) {
    console.error(error);
    return sendRes(res, 500, "Internal Server Error", "error", null);
  }
}

export async function loginController(req, res) {
  try {
    const { email, username, password } = req.body;

    if ((!email && !username) || !password) {
      return sendRes(res, 400, "Email or Username and Password are required", "error", null);
    }

    const user = await UserModel.findOne({ $or: [{ email }, { username }] }).select("+password");
    if (!user) {
      return sendRes(res, 400, "Account not found with the provided email or username", "error", null);
    }

    const isMatch = await bcryptjs.compare(password, user.password);
    if (!isMatch) {
      return sendRes(res, 400, "Invalid email/username or password", "error", null);
    }

    const token = generateToken({ id: user._id });
    res.cookie("token", token, getCookieOptions());

    return sendRes(res, 200, "Login successful", "success", user);
  } catch (error) {
    console.error(error);
    return sendRes(res, 500, "Internal Server Error", "error", null);
  }
}

export async function getUser(req, res) {
  try {
    const userId = req.user.id;

    const user = await UserModel.findById(userId);
    if (!user) {
      return sendRes(res, 404, "User not found", "error", null);
    }

    return sendRes(res, 200, "User found successfully", "success", user);
  } catch (error) {
    console.error(error);
    return sendRes(res, 500, "Internal Server Error", "error", null);
  }
}

export async function logout(req, res) {
  try {
    res.clearCookie("token", getCookieOptions());
    return sendRes(res, 200, "Logout Successfully", "success", null);
  } catch (error) {
    console.error(error);
    return sendRes(res, 500, "Internal Server Error", "error", null);
  }
}
