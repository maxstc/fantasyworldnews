import express from "express";
const router = express.Router();
import { db } from "../db.js";

router.post("/signup", signup);

async function signup (req, res) {
    res.status(200).json({ success: true });
};

router.post("/login", login);

async function login (req, res) {
    res.status(200).json({ success: true });
};

export { router }; 