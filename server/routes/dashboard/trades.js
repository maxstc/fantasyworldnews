//Written by Max & Evan

import pool from "../../db.js";

export async function trades (req, res) {
    try {
        //Check if this account is in this game
        //Get their account ID first
        const accountsQuery = await pool.query(
            "SELECT * FROM accounts WHERE username = $1",
            [req.user.username]
        )
        if (accountsQuery.rowCount < 1) {
            return res.status(400).json({
                message: "Logged in account no longer exists"
            });
        }
        const accountID = accountsQuery.rows[0].account_id;
        //check that that account is in the game were getting the trades for
        const playersQuery = await pool.query(
            "SELECT * FROM players WHERE account_id = $1 AND game_id = $2",
            [accountID, req.body.gameID]
        )
        if (playersQuery.rowCount < 1) {
            return res.status(400).json({
                message: "Logged in account not in specified game"
            });
        }
        const tradesQuery = await pool.query(
            "SELECT * FROM trades WHERE game_id = $1", 
            [req.body.gameID]
        );

        console.log(tradesQuery.rows);

        // const output = {
        //     trades: [
        //         {
        //             timestamp:
        //             proposerTeam:
        //             targetTeam:
        //             proposerCountry:
        //             targetCountry:
        //         },
        //     ]
        // }
    }
    catch (error) {
        //Some error happened
        console.error(error);
        return res.status(400).json({
            message: "Uncaught JS Error."
        });
    }
};
