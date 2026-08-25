import express from "express";
const router = express.Router();
import { db } from "../db.js";

router.post("/signup", signup);
router.post("/login", login);

async function signup (req, res) {
    res.status(200).json({ success: true });
};

async function login (req, res) {
    res.status(200).json({ success: true });
};

export { router }; 