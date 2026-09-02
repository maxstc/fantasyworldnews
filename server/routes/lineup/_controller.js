import express from "express";
const router = express.Router();
import { set } from "./set.js";

router.post("/set", set);

export { router };