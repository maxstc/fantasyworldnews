// Written by David
import pool from "../../db.js";
import argon2 from "argon2";
import jwt from "jsonwebtoken";
import { maxPasswordLength } from "./signup.js";
import { tokenLifetime } from "./signup.js";


export async function login (req, res) {
    try {

        // check that password is not exceedingly long
        if (req.body.password.length > maxPasswordLength) {
            return res.status(400).json({
                message: `Password exceeds ${maxPasswordLength} characters`,
            });
        }

        // Check that username exists
        const normalizedUsername = req.body.username.toLowerCase();
        const usernameQuery = await pool.query(
            "SELECT * FROM accounts WHERE username = $1",
            [normalizedUsername]
        );
        if (usernameQuery.rowCount === 0) {
            return res.status(400).json({
                message: "Username not found",
            });
        }

        // Don't authorize if password doesn't match hash
        const hashedPassword = usernameQuery.rows[0].password_hash;
        if (! (await argon2.verify(hashedPassword, req.body.password))){
            return res.status(400).json({
                message: `Password incorrect.`,
            });
        }

        // By this point request is valid
        
        //Generate the token
        const sessionToken = jwt.sign(
            { username: normalizedUsername },
            process.env.JWT_SECRET,
            { expiresIn: tokenLifetime }
        );

        //Reply with token
        return res.status(200).json({ 
            token: sessionToken,
        });
    }
    catch (error) {
        //Some error happened
        console.error(error);
        return res.status(400).json({
            message: "JS error.",
        });
    }
}

