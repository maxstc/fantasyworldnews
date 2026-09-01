// Written by David with glee
import pool from "../../db.js";

export async function headlines (req, res) {
    // declare output object to avoid falling out of scope
    const resHeadlines = [];
    try {
        // Check missing parameters
        const lastHeadline = req.body.lastHeadline;
        const numHeadlines = req.body.numHeadlines;
        if (lastHeadline === undefined) {
            return res.status(400).json({
                message: "Request missing field: \"lastHeadline\"",
                headlines: null,
            });
        }
        if (numHeadlines === undefined) {
            return res.status(400).json({
                message: "Request missing field: \"numHeadlines\"",
                headlines: null,
            });
        }

        // If user has no headlines yet, pretend they have a headline one newer than the latest
        // so they will get the very newest headline fresh off the press and avoid off by one error
        if (lastHeadline === null) {
            const newestHeadlineQuery = await pool.query(
                "SELECT ID FROM headlines WHERE fetched_at = (SELECT MAX(fetched_at) FROM headlines)",
            );
            lastHeadline = newestHeadlineQuery.rows[0].id + 1;
        }

        // Get 'numHeadlines' headlines before the lastHeadline, but reverse so sorted from
        // newest to oldest
        const newHeadlinesQuery = await pool.query(
            "SELECT * FROM headlines WHERE id < $1 and id >= $2 ORDER BY id DESC",
            [lastHeadline, lastHeadline - numHeadlines]
        );

        // Pack the required properties into the json object declared earlier
        for (let i = 0; i < newHeadlinesQuery.rowCount; i++) {
            resHeadlines.push({
                text: newHeadlinesQuery.rows[i].text,
                timestamp: newHeadlinesQuery.rows[i].fetched_at,
                link: newHeadlinesQuery.rows[i].link,
            })
        }
        console.log(resHeadlines);

    } catch (error) {
        console.error(error);
        return res.status(400).json({
            message: "JS error.",
            headlines: null,
        });
    }
    //Reply
    return res.status(200).json({ 
        message: null,
        headlines: resHeadlines,
    });
};

