import express from "express";
const router = express.Router();
import { country } from "./country.js";
import { player } from "./player.js";

router.post("/country", country);
router.post("/player", player);

export { router };