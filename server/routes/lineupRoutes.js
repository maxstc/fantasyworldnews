import express from "express";
const router = express.Router();
import { lineup } from "../controllers/lineupController.js";

router.post("/", lineup);

module.exports = router;