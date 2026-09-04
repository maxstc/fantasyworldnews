import pool from "#root/server/db.js";

export async function players(req, res) {
    const gameID = req.body.gameID;

    try {
        // Verify the authenticated user is actually a player in this game
        const requesterResult = await pool.query(
            `
            SELECT p.id
            FROM players p
            JOIN accounts a
                ON p.account_id = a.id
            WHERE p.game_id = $1
              AND a.username = $2
            `,
            [gameID, req.user.username]
        );
        //above asks if currently auth account actually is a player in that game
        if (requesterResult.rows.length === 0) {
            return res.status(403).json({
                message: "You are not a player in this game"
            });
        }

        // Get all players in that game
        const result = await pool.query(
            `
            SELECT id
            FROM players
            WHERE game_id = $1
            ORDER BY id
            `,
            [gameID]
        );

        const players = result.rows.map(player => player.id);

        return res.status(200).json({
            players: players
        });

    } catch (error) {
        console.error(error);

        return res.status(500).json({
            message: "Database error"
        });
    }
}