import { Router } from "express";
import { Login, Logout, registeruser } from "../controllers/user.controller.js";
import { verifyuser } from "../middleware/auth.middleware.js";

const router = Router();

router.route("/register").post(registeruser);
router.route("/login").post(Login);
router.route("/logout").post(verifyuser, Logout);

export default router;
