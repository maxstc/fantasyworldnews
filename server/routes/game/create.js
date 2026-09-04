// Written by David with inspiration from Allah
// Creates a game with the 'preparing' status after an authenticated user requests it
// and returns the new game's id
import pool from "#root/server/db.js";

export async function create (req, res) {
    try {
        
        const gameQuery = await pool.query(
        `
            INSERT INTO games (status, owner) 
            VALUES ('preparing', $1) 
            RETURNING id
        `,
        [req.user.accountID]
        );

        const gameID = gameQuery.rows[0].id;

        return res.status(200).json({ 
            gameID: gameID,
        });

    }
    catch (error) {
        console.error(error);
        return res.status(400).json({
            message: "JS error.",
        });
    }
};
