//Written by Max with guidance from the Dalai Lama and Mr. House from FNV
import pool from "#root/server/db.js";

export async function invite (req, res) {
    const inviteQuery = await pool.query(
        `
        INSERT INTO game_invites (status, sender_account_id, recipient_account_id, game_id)
        VALUES ('pending', $1, $2, $3)
        `,
        []
    );
    res.status(200).json({ success: true });
};