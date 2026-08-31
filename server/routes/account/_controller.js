import express from "express";
const router = express.Router();
import { signup } from "./signup.js";
import { login } from "./login.js";

router.post("/signup", signup);
router.post("/login", login);

export { router };