import pool from "#root/server/db.js";
import { countries } from "./countries.js";

const client = await pool.connect();

const dbCheck = await client.query(`
  SELECT current_database(), current_user
`);


try {
    await client.query("BEGIN");

    for (const country of countries) {
        const result = await client.query(
        `   
            INSERT INTO countries (country_code, flag, display_name, continent)
            VALUES ($1, $2, $3, $4)
            RETURNING id
        `,
        [
            country.countrycode,
            country.flag,
            country.displayName, 
            country.continent
        ]
        );

        const countryID = result.rows[0].id; //get id back to us from PostgreSQL

        for (const name of new Set(country.name)) { //goes through all names for country, changed to new Set(country.name) to stop breaking with identical entries
            await client.query(
                `   
                    INSERT INTO country_names (country_id, name)
                    VALUES ($1, $2)
                `,
                [countryID, name]
            );
        }
        console.log(country.displayName, " was placed into SQL");
    }

    await client.query("COMMIT");
    console.log("")
    console.log("Task Successful!")
    console.log("")
    console.log("AN IQ TOO HIGH?")
}
catch (error) {
    await client.query("ROLLBACK");
    console.error("IM OUT! 1.3 SECONDS:", error);
}
finally {
    client.release();
    await pool.end();
}

