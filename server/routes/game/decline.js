//Written by Max with guidance from the Dalai Lama and Mr. House from FNV
import pool from "#root/server/db.js";

export async function decline (req, res) {
    try {
        const declineQuery = await pool.query(
            `
            UPDATE game_invites 
            SET status='declined' 
            WHERE STATUS = 'pending' 
            AND id = $1 
            AND (recipient_account_id = $2 OR sender_account_id = $2)
            RETURNING *;
            `,
            [req.body.inviteID, req.user.id]);
        if (declineQuery.rowCount > 0) {
            res.status(200).json({});
        }
        res.status(400).json({ message: "Invite not found" });
    }
    catch (error) {
        res.status(400).json({ message: "Decline failed" });
    }
};