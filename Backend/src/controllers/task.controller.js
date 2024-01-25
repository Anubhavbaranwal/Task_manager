import { isValidObjectId } from "mongoose";
import { task } from "../models/task.model";
import { ApiError } from "../utils/ApiError";
import { ApiResponse } from "../utils/ApiResponse";
import { asynchandler } from "../utils/asynchandler";

const addtask = asynchandler(async (req, res) => {
  const { title, description } = req.body;
  if (!title.trim()) {
    throw new ApiError(400, "title both is required");
  }

  const taskadded = await task.create({
    title,
    description,
    owner: req.user._id,
  });

  const findtask = await task.findById(taskadded?._id);
  if (!findtask) {
    throw new ApiError(400, "something went wrong while addeing task");
  }
  return res
    .status(200)
    .json(new ApiResponse(200, findtask, "task added successfully"));
});

const deletedtask = asynchandler(async (req, res) => {
  const { taskid } = req.params;

  if (!isValidObjectId(taskid)) {
    throw new ApiError(400, "task id not valid");
  }

  const delete_task = await task.findByIdAndDelete(taskid);
  if (!delete_task) {
    throw new ApiError(400, "something went wrong while deleting the task");
  }
  return res
    .status(200)
    .json(new ApiResponse(200, delete_task, "task delted successfully"));
});
