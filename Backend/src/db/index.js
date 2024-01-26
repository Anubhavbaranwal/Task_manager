import mongoose from "mongoose";
import { name } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.Mongodb_Url}/${name}`
    );
    console.log(
      `mongodb connected successfully !!  DB HOST: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("mongodb conection failed", error);
    process.exit(1);
  }
};

export default connectDB;
