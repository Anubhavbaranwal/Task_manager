import mongoose, { Schema } from "mongoose";
import bycrpt from "bcrypt";
import Jwt from "jsonwebtoken";

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    task: [
      {
        type: Schema.Types.ObjectId,
        ref: "task",
      },
    ],
    password: {
      type: String,
      required: [true, "Password is Required"],
    },
    refreshtoken: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);
userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bycrpt.hash(this.password, 10);
  }
  next();
});
userSchema.methods.isPasswordCorrect = async function (password) {
  return await bycrpt.compare(password, this.password);
};

userSchema.methods.generateAccessToken = function () {
  return Jwt.sign(
    {
      _id: this._id,
      username: this.username,
      email: this.email,
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
    }
  );
};

userSchema.methods.generateRefreshToken = function () {
  return Jwt.sign(
    {
      _id: this._id,
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
      expiresIn: process.env.REFRESH_TOKEN_EXPIRY,
    }
  );
};

export const user = mongoose.model("users", userSchema);
