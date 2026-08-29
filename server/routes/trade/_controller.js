import express from "express";
const router = express.Router();
import { propose } from "../propose.js";
import { accept } from "../accept.js";
import { decline } from "../decline.js";

router.post("/propose", propose);
router.post("/accept", accept);
router.post("/decline", decline);
