import { Router } from "express";
import { verifyuser } from "../middleware/auth.middleware.js";
import {
  addtask,
  alltask,
  deletedtask,
  updatetask,
} from "../controllers/task.controller.js";

const router = Router();

router.route("/").get(verifyuser, alltask);
router.route("/add").post(verifyuser, addtask);
router.route("/delete/:taskid").delete(verifyuser, deletedtask);
router.route("/update/:taskid").patch(verifyuser, updatetask);

export default router;
