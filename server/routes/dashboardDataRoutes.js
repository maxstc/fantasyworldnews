import express from "express";
const router = express.Router();
import { dashboardData } from "../controllers/dashboardDataController.js";

router.get("/", dashboardData);

module.exports = router;