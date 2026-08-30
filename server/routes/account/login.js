import pool from "../../db.js";

export async function login (req, res) {
    //Check that password is long and complex enough

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