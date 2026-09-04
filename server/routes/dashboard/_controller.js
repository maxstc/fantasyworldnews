import express from "express";
const router = express.Router();
import { headlines } from "./headlines.js";
import { trades } from "./trades.js";
import { players } from "./players.js";
import { checkParamsNotUndefined } from "#root/server/middleware/checkParamsNotUndefined.js";
import { checkAuth } from "#root/server/middleware/checkAuth.js";

router.post("/headlines", headlines);
router.post(
    "/trades",
    checkAuth,
    checkParamsNotUndefined(["gameID"]),
    trades
);

router.post(
    "/players",
    checkAuth,
    checkParamsNotUndefined(["gameID"]),
    players
);

export { router };