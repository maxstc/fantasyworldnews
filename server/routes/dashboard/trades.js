//Written by Max & Evan

import pool from "../../db.js";
import jwt from "jsonwebtoken";

export async function trades (req, res) {
    try {
        const tradesQuery = await pool.query(
            "SELECT * FROM trades WHERE game_id = $1", 
            [req.body.gameID]
        );

        tradesQuery.rowCount;
        tradesQuery.rows;
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
