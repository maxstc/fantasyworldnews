// Written by David with lust
// to be completed when game APIs are finished
import pool from "../../db.js";

export async function player (req, res) {
    try {
        const playerID = req.body.playerID;
        const gameID = req.body.gameID;
        const displayName = await pool.query(
            "SELECT * FROM players WHERE id = $1",
            [playerID]
        );
        console.log(displayName);
        return res.status(200).json({ 
            displayName: "displayName",
            points: "points",
            countries: "countries",
            isYou: "isYou",
        });
    }
    catch (error) {
        console.error(error);
        return res.status(400).json({
            message: "JS error.",
        });
    }
};
