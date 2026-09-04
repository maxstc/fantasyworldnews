//Written by Evan with help from SkyNet.

import pool from "#root/server/db.js";

export async function country(req, res) {
    const gameID = req.body.gameID;
    const countryCode = req.body.countryCode;
    
    console.log("Request body:", req.body);
    console.log("Game ID:", req.body.gameID);
    console.log("Country Code:", req.body.countryCode);
    try {
        const playerCheck = await pool.query(
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

        if (playerCheck.rows.length === 0) {
            return res.status(403).json({
                message: "You are not a player in this game"
            });
        }

        const result = await pool.query(
            `
                SELECT
                    c.display_name,
                    c.flag,
                    c.continent,
                    ARRAY_AGG(cnames.name) AS matches
                    FROM countries c 
                    JOIN country_names cnames
                        ON cnames.country_id = c.id
                    WHERE c.country_code = $1
                    GROUP BY c.id
            `,
            [countryCode]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({
                message: "Country not found"
            });
        }

        const country = result.rows[0];

        const ownerResult = await pool.query(
            `
            SELECT co.player_id
            FROM country_ownerships co
            JOIN countries c
                ON co.country_id = c.id
            WHERE c.country_code = $1
                AND co.game_id = $2
            `,
            [countryCode, gameID]
        );

        const owner = ownerResult.rows.length > 0
            ? ownerResult.rows[0].player_id
            : null;

        return res.status(200).json({
            displayName: country.display_name,
            matches: country.matches,
            flag: country.flag,
            continent: country.continent,
            owner: owner
        });

    } catch (error) {
        console.error(error);

        return res.status(500).json({
            message: "Database error"
        });
    }

}
