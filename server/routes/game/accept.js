//Written by Max with guidance from the Dalai Lama and Mr. House from FNV
import pool from "#root/server/db.js";

export async function invite (req, res) {
    const client = await pool.connect();

    try {
        //start safe queries
        await client.query("BEGIN");
        //update invite and grab game id
        const updateQuery = await client.query("UPDATE game_invites SET status='accepted' WHERE id = $1 RETURNING *", [req.body.inviteID]);
        const gameID = updateQuery.rows[0].game_id;
        //add player
        await client.query("INSERT INTO players (game_id, account_id) VALUES $1, $2", [gameID, req.user.account_id]);
        //commit
        await client.query("COMMIT");
    }
    catch (error) {
        await client.query("ROLLBACK");
        throw err;
    }
    finally {
        client.release();
    }

    res.status(200).json({ success: true });
};