import { user } from "../models/user.model.js";
import { ApiError } from "../utils/ApiError.js";
import jwt from "jsonwebtoken";
import { asynchandler } from "../utils/asynchandler.js";

export const verifyuser = asynchandler(async (req, _, next) => {
  try {
    const token =
      req.cookies?.accessToken ||
      req.header("Authorization")?.replace("Bearer ", "");
    if (!token) {
      throw new ApiError(401, "token not found please login");
    }
    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    const User = await user
      .findById(decodedToken._id)
      .select("-password -refreshtoken");
    req.user = User;
    console.log("checked");
    next();
  } catch (error) {
    throw new ApiError(401, error?.message || "invalid access token");
  }
});
