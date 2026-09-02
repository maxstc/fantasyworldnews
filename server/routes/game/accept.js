//Written by Max with guidance from the Dalai Lama and Mr. House from FNV
import pool from "#root/server/db.js";

export async function invite (req, res) {
    
    const inviteQuery = await pool.query(
        "SELECT * FROM game_invites WHERE id = $1 AND recipient_account_id = $2",
        [req.body.inviteID, req.user.account_id]
    );
    const gameID = inviteQuery.rows[0].game_id;

    const client = await pool.connect();

    try {
        //start safe queries
        await client.query("BEGIN");
        //add player
        await client.query("INSERT INTO players (game_id, account_id) VALUES $1, $2", [gameID, req.user.account_id]);
        //update invite
        //maybe can use this to get the game id instead of doing separate query?
        await client.query("UPDATE game_invites SET status='accepted' WHERE id = $1", [req.body.inviteID]);
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