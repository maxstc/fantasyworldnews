// Written by David with lust
// Gets information about a player given a player ID as well as a game ID to see
// which countries they own in a certain game
// NOTE: If the player ID is unique and the game ID is not null in the 
// players table then we should be able to
// figure out the game ID given the player ID, so this call only needs 1 parameter.
// I am not sure if a db lookup is better or worse than another api parameter, so this
// decision is up to you Max
import pool from "#root/server/db.js";

export async function player (req, res) {
    try {
        const playerID = req.body.playerID;
        const gameID = req.body.gameID;


        // Find the display name of the player from the accounts table
        const displayNameQuery = await pool.query(
        `
            SELECT username 
            FROM accounts
            JOIN players
                ON accounts.id = players.account_id
            WHERE players.id = $1
        `, [playerID]
        );
        const displayName = displayNameQuery.rows[0].username;

        // Find the number of points the player has
        const pointsQuery = await pool.query(
        `
            SELECT score 
            FROM players
            WHERE players.id = $1
        `, [playerID]
        );
        const points = pointsQuery.rows[0].score;

        // Find the country codes of the countries owned by a player in a game
        // NOTE: this query was not extensively tested, it may have a bug.
        const countriesQuery = await pool.query(
        `
            SELECT country_code 
            FROM countries
            JOIN country_ownerships
                ON countries.id = country_ownerships.country_id
            WHERE country_ownerships.player_id = $1
            AND country_ownerships.game_id = $2
            ORDER BY countries.country_code ASC
        `, [playerID, gameID]
        );

        // Package countries into an array
        const countries = [];
        for (let i = 0; i < countriesQuery.rowCount; i++) {
            countries.push(countriesQuery.rows[i].country_code);
        }
        
        // Compare the account ID of the request with that of the player ID
        // identified by the request to see if player is asking about themselves.
        const ownUserIDQuery = await pool.query(
        // This query is redundant when login and signup are changed
        `
            SELECT * FROM accounts WHERE username = $1
        `, [req.user.username]
        );
        const ownUserID = ownUserIDQuery.rows[0].id;

        const targetUserIDQuery = await pool.query(
        `
            SELECT account_id FROM players WHERE id = $1
        `, [playerID]
        );
        const targetUserID = targetUserIDQuery.rows[0].account_id;

        const isYou = (ownUserID === targetUserID);


        return res.status(200).json({ 
            displayName: displayName,
            points: points,
            countries: countries,
            isYou: isYou,
        });
    }
    catch (error) {
        console.error(error);
        return res.status(400).json({
            message: "JS error.",
        });
    }
};
