//Written by Max

import pool from "../../db.js";
import validator from "validator";
import argon2 from "argon2";
import jwt from "jsonwebtoken";

export async function signup (req, res) {
    try {
        //Check that all params are there
        if (req.body.password === undefined) {
            return res.status(400).json({
                success: false, 
                message: "Request missing field: \"password\""
            });
        }
        if (req.body.username === undefined) {
            return res.status(400).json({
                success: false, 
                message: "Request missing field: \"username\""
            });
        }
        if (req.body.email === undefined) {
            return res.status(400).json({
                success: false, 
                message: "Request missing field: \"email\""
            });
        }

        //Check that password isn't too short
        if (req.body.password.length < 12) {
            return res.status(400).json({
                success: false, 
                message: "Password must be at least 12 characters."
            });
        }

        //Check that password isn't too long
        if (req.body.password.length > 64) {
            return res.status(400).json({
                success: false, 
                message: "Password must be at less than 65 characters."
            });
        }

        //Check that email is valid
        if (!validator.isEmail(email)) {
            return res.status(400).json({
                success: false, 
                message: "Invalid email."
            });
        }

        //Make username lowercase
        const normalizedUsername = req.body.username.toLowerCase();

        //Check that username is valid
        //alphanumeric or . or _
        const usernameRegex = /^[a-z0-9_.]+$/;
        if (!usernameRegex.test(username)) {
            return res.status(400).json({
                success: false, 
                message: "Invalid username."
            });
        }

        //Check that username isn't taken
        const usernameQuery = await pool.query(
            "SELECT * FROM accounts WHERE username = $1",
            [normalizedUsername]
        );
        if (usernameQuery.rowCount > 0) {
            return res.status(400).json({
                success: false, 
                message: "Username already taken."
            });
        }

        //Hash the password
        const hashedPassword = await argon2.hash(req.body.password);

        //Signup is valid; create account
        await pool.query(
            `
            INSERT INTO accounts (email, username, password_hash)
            VALUES ($1, $2, $3)
            `,
            [req.body.email, normalizedUsername, hashedPassword]
        );

        //Generate the token
        const sessionToken = jwt.sign(
            { username: normalizedUsername },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );

        //Reply with token
        return res.status(200).json({ 
            success: true,
            token: sessionToken
        });
    }
    catch (error) {
        //Some error happened
        console.error(error);
        return res.status(400).json({
            success: false,
            message: "JS error."
        });
    }
};