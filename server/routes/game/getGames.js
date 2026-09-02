// Written by David ibn Abdullah
// Takes the user data from the authentication token and returns the ids of
// all the games the user is in

import pool from "#root/server/db.js";

export async function getGames (req, res) {
    try {
        // This query is redundant when login and signup are changed
        const userIDQuery = await pool.query(
        `
            SELECT * FROM accounts WHERE username = $1
        `, [req.user.username]
        );
        const userID = userIDQuery.rows[0].id;

        // This will only return games that are pending or in progress, delete the last line
        // in the query to get literally all games
        const gamesQuery = await pool.query(
        `
            SELECT game_id
            FROM players
            JOIN games
                ON players.game_id = games.id
            WHERE players.account_id = $1
            AND games.status != 'completed'
        `, [userID]
        );

        // Package gameIDs into an array
        const gameIDs = [];
        for (let i = 0; i < gamesQuery.rowCount; i++) {
            gameIDs.push(gamesQuery.rows[i].game_id);
        }

        return res.status(200).json({ 
            gameIDs: gameIDs,
        });

    }
    catch (error) {
        console.error(error);
        return res.status(400).json({
            message: "JS error.",
        });
    }
};
