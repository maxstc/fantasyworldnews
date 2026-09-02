import express from "express";
const router = express.Router();
import { player } from "./player.js";
import { country } from "./country.js";
import { checkParamsNotUndefined } from "#root/server/middleware/checkParamsNotUndefined.js";
import { checkAuth } from "#root/server/middleware/checkAuth.js";

router.post(
    "/player",
    checkParamsNotUndefined(["gameID", "playerID"]),
    player
);
router.post(
    "/country",
    checkAuth,
    checkParamsNotUndefined(["gameID", "countryID"]),
    country
);

export { router };
