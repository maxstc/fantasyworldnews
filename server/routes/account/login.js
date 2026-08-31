import pool from "../../db.js";
import { maxPasswordLength } from "./signup.js"

export async function login (req, res) {
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

        // check that password is not exceedingly long
        if (req.body.password.length > maxPasswordLength) {
            return res.status(400).json({
                success: false, 
                message: `Password exceeds ${maxPasswordLength} characters`
            });
        }

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

    //Check that username isn't taken

    //Check that pas
    const result = await pool.query("SELECT NOW()");
    res.status(200).json({ success: true });
};

// const client = await pool.connect();

// try {
//   await client.query("BEGIN");

//   // multiple queries...

//   await client.query("COMMIT");
// } catch (error) {
//   await client.query("ROLLBACK");
//   throw error;
// } finally {
//   client.release();
// }
