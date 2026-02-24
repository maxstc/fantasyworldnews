import express from "express";
const router = express.Router();
import { trade, declineTrade, acceptTrade } from "../controllers/lineupController.js";

router.post("/trade", trade);
router.post("/declineTrade", declineTrade);
router.post("/acceptTrade", acceptTrade);

module.exports = router;