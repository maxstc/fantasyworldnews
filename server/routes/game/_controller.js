import express from "express";
const router = express.Router();
import { create } from "./create.js";
import { invite } from "./invite.js";
import { accept } from "./accept.js";
import { decline } from "./decline.js";
import { getInvites } from "./getInvites.js";
import { getGames } from "./getGames.js";

router.post("/create", create);
router.post("/invite", invite);
router.post("/accept", accept);
router.post("/decline", decline);
router.post("/getInvites", getInvites);
router.post("/getGames", getGames);

export { router };