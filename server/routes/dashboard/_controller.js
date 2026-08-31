import express from "express";
const router = express.Router();
import { headlines } from "./headlines.js";
import { trades } from "./trades.js";
import { players } from "./players.js";

router.post("/headlines", headlines);
router.post("/trades", trades);
router.post("/players", players);

export { router };