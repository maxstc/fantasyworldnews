//Written by Max with guidance from the Dalai Lama and Mr. House from FNV
import pool from "#root/server/db.js";

export async function getInvites (req, res) {
    try {
        const inviteQuery = await pool.query("SELECT * FROM game_invites' WHERE recipient_id = $1 OR sender_id = $1;",
            [req.body.inviteID, req.user.id]);
        res.status(200).json({invites: inviteQuery.rows});
    }
    catch (error) {
        res.status(400).json({ message: "Get invites failed" });
    }
};