import express from "express";
const router = express.Router();
import { signup } from "./signup.js";
import { login } from "./login.js";
import { checkParamsNotUndefined } from "#root/server/middleware/checkParamsNotUndefined.js";

router.post(
    "/signup", 
    checkParamsNotUndefined(["username", "password", "email"]),
    signup
);

router.post(
    "/login",
    checkParamsNotUndefined(["username", "password"]),
    login);

export { router };
