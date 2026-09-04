//Written by Max with guidance from the Dalai Lama and Mr. House from FNV
import pool from "#root/server/db.js";

export async function decline (req, res) {
    await pool.query("UPDATE game_invites SET status='declined' WHERE id = $1 AND (recipient_account_id = $2 OR sender_account_id = $3) ", [req.body.inviteID, req.user.id, req.user.id]);

    res.status(200).json({ success: true });
};