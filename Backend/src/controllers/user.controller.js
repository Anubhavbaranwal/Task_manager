import { user } from "../models/user.model";
import { ApiError } from "../utils/ApiError";
import { ApiResponse } from "../utils/ApiResponse";
import { asynchandler } from "../utils/asynchandler";

const generateAccessandrefreshToken = async (id) => {
  try {
    const User = await user.findById(userid);
    const accesstoken = User.generateAccessToken();
    const refreshtoken = User.generateRefreshToken();
    User.refreshtoken = refreshtoken;
    await User.save({ validateBeforeSave: false });

    return { accesstoken, refreshtoken };
  } catch (error) {
    throw new ApiError(
      500,
      "Something Went Wrong in Generating Access/Refresh Token"
    );
  }
};
const registeruser = asynchandler(async (req, res) => {
  const { username, email, password } = req.body;

  if ([username, email, password].some((field) => field?.trim() === "")) {
    throw new ApiError(400, "Each field is required");
  }
  const existeduser = await user.findOne({
    $or: [{ username }, { email }],
  });

  if (existeduser) {
    throw new ApiError(404, "user already existed");
  }

  const users = await user.create({
    username: username.toLowerCase(),
    email,
    password,
  });

  const created_user = await user
    .findById(users?._id)
    .select("-password -refreshtoken");

  if (!created_user) {
    throw new ApiError(400, "Something went wrong while registrying the user ");
  }

  return res
    .status(201)
    .json(new ApiResponse(201, created_user, "user created Successfully"));
});

const Login = asynchandler(async (req, res) => {
  const { email, username, password } = req.body;

  if (!email || !username) {
    throw new ApiError(400, "please Provide either email or username");
  }

  const finduser = await user.findOne({
    $or: [{ username }, { email }],
  });
  if (!finduser) {
    throw new ApiError(400, "user not found ");
  }

  const isuservalid = await user.isPasswordCorrect(password);

  if (!isuservalid) {
    throw new ApiError(400, "user credential not valid");
  }

  const { accesstoken, refreshtoken } = await generateAccessandrefreshToken(
    finduser?._id
  );

  const loggeduser = await user
    .findById(finduser._id)
    .select("-password -refreshtoken");

  const options = {
    httpOnly: true,
    secure: true,
  };
  return res
    .status(200)
    .cookie("accessToken", accesstoken, options)
    .cookie("refreshToken", refreshtoken, options)
    .json(
      new ApiResponse(
        200,
        {
          user: loggeduser,
          accesstoken,
          refreshtoken,
        },
        "User Logged In Successfully"
      )
    );
});

const Logout = asynchandler(async (req, res) => {
  await user.findByIdAndUpdate(
    req.user._id,
    {
      $unset: {
        refreshtoken: 1,
      },
    },
    {
      new: true,
    }
  );

  const options = {
    httpOnly: true,
    secure: true,
  };
  return res
    .status(200)
    .clearCookie("accessToken", options)
    .clearCookie("refreshToken", options)
    .json(new ApiResponse(200, {}, "LoggedOut SuccessFully"));
});

export { Login, Logout, registeruser };
