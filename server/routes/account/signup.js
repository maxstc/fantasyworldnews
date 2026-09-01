//Written by Max

import pool from "../../db.js";
import validator from "validator";
import argon2 from "argon2";
import jwt from "jsonwebtoken";

const minPasswordLength = 12;
export const maxPasswordLength = 64;
export const tokenLifetime = "1h";

export async function signup (req, res) {
    try {
        //Check that password isn't too short
        if (req.body.password.length < minPasswordLength) {
            return res.status(400).json({
                message: `Password must be at least ${minPasswordLength} characters.`
            });
        }

        //Check that password isn't too long
        if (req.body.password.length > maxPasswordLength) {
            return res.status(400).json({
                message: `Password must be at less than ${maxPasswordLength} characters.`
            });
        }

        //Check that email is valid
        if (!validator.isEmail(req.body.email)) {
            return res.status(400).json({
                message: "Invalid email."
            });
        }

        //Make username lowercase
        const normalizedUsername = req.body.username.toLowerCase();

        //Check that username is valid
        //alphanumeric or . or _
        const usernameRegex = /^[a-z0-9_.]+$/;
        if (!usernameRegex.test(normalizedUsername)) {
            return res.status(400).json({
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
            { expiresIn: tokenLifetime }
        );

        //Reply with token
        return res.status(200).json({ 
            token: sessionToken
        });
    }
    catch (error) {
        //Some error happened
        console.error(error);
        return res.status(400).json({
            message: "Uncaught JS Error."
        });
    }
};
