import { isValidObjectId } from "mongoose";
import { task } from "../models/task.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asynchandler } from "../utils/asynchandler.js";

const alltask = asynchandler(async (req, res) => {
  const tasklist = await task.find({ owner: req.user?._id });
  return res
    .status(200)
    .json(new ApiResponse(200, tasklist, "fetched all task"));
});

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
  const findetask = await task.findById(taskid);
  if (!findetask) {
    throw new ApiError(400, "can't find the task please provide correct id");
  }

  const delete_task = await task.findByIdAndDelete(taskid);
  if (!delete_task) {
    throw new ApiError(400, "something went wrong while deleting the task");
  }
  return res
    .status(200)
    .json(new ApiResponse(200, {}, "task delted successfully"));
});

const updatetask = asynchandler(async (req, res) => {
  const { title, description } = req.body;
  if (!(title || description)) {
    throw new ApiError(400, "title and description is required");
  }

  const findtask = await task.findById(req.params.taskid);
  if (!findtask) {
    throw new ApiError(400, "taks with such id doesnot exists");
  }
  if (!findtask.owner.equals(req.user._id)) {
    // console.log(findtask.owner, req.user._id);
    throw new ApiError(403, "you can't edit other's tasks");
  }
  const updateObject = {};
  if (title) updateObject.title = title;
  if (description) updateObject.description = description;
  const update = await task.findByIdAndUpdate(req.params.taskid, updateObject, {
    new: true,
  });
  const findupdate = await task.findById(update._id);
  if (!findupdate) {
    throw new ApiError(403, "something went wrong while updating the the task");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, findupdate, "update successfully"));
});

export { alltask, updatetask, addtask, deletedtask };
