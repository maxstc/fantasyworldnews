import express from "express";
const router = express.Router();
import { checkParamsNotUndefined } from "#root/server/middleware/checkParamsNotUndefined.js";
import { checkAuth } from "#root/server/middleware/checkAuth.js";

import { player } from "./player.js";
import { country } from "./country.js";

router.post(
    "/player",
    checkAuth,
    checkParamsNotUndefined(["gameID", "playerID"]),
    player
);
router.post(
    "/country",
    checkParamsNotUndefined(["gameID", "countryID"]),
    country
);

export { router };
