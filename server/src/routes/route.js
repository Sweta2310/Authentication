import express from "express";
import { signup, login, getMe } from "../controller/authcontroller.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/me", auth, getMe);

export default router;
