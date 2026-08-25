import express from "express";
const router = express.Router();
import { db } from "../db.js";

router.post("/", lineup);

async function lineup(req, res) {
    db.collection("teams").updateOne({name: req.body.team}, {$set: {lineup: req.body.lineup}});
    res.json({success: true, message: "Success"});
};


export { router };