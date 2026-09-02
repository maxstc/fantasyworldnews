import express from "express";
const router = express.Router();
import { checkParamsNotUndefined } from "#root/server/middleware/checkParamsNotUndefined.js";
import { checkAuth } from "#root/server/middleware/checkAuth.js";

import { create } from "./create.js";
import { invite } from "./invite.js";
import { accept } from "./accept.js";
import { decline } from "./decline.js";
import { getInvites } from "./getInvites.js";
import { getGames } from "./getGames.js";

router.post(
    "/create",
    checkAuth,
    create
);
router.post(
    "/invite",
    checkAuth,
    checkParamsNotUndefined(["gameID", "recipientAccountID"]),
    invite
);
router.post(
    "/accept",
    checkAuth,
    checkParamsNotUndefined(["inviteID"]),
    accept
);
router.post(
    "/decline",
    checkAuth,
    checkParamsNotUndefined(["inviteID"]),
    decline
);
router.post(
    "/get-invites",
    checkAuth,
    getInvites
);
router.post(
    "/get-games",
    checkAuth,
    getGames
);

export { router };
