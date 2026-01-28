//webscrape to check for new headlines every minute

//webscraping libary
import * as cheerio from "cheerio";
//db library
import { MongoClient } from "mongodb";
let db;

//store the time that we last performed an update
let lastUpdate = Date.now();

//connect to DB
async function main() {
    const client = new MongoClient("mongodb://127.0.0.1:27017");
    await client.connect();
    db = client.db("gamedata");
}

//check if he haven't updated in 1 minute. if so, check for new headlines
async function tick() {
    let now = Date.now();
    if (Math.floor(lastUpdate / 60000) < Math.floor(now / 60000)) {
        console.log("Checking news at " + new Date());
        checkNews();
        lastUpdate = now;
    }
}

//check for new headlines
async function checkNews() {
    try {
        const response = await fetch("https://www.cnn.com/world");
        const responseText = await response.text();
        let doc = cheerio.load(responseText);
        doc(".container__headline-text").map(async (index, element) => {
            await processHeadline(doc(element).text(), doc(element).parent().parent().parent().attr("href"));
        });
    }
    catch (err) {
        console.log("Check news failed");
        console.error(err);
    }
}

//read in a headline, dish out points, and add to log
async function processHeadline(text, link) {
    let cursor = db.collection("headlines").find({text: text}); //check if headline already exists
    cursor = await cursor.toArray();
    if (cursor.length === 0) {
        console.log("new headline: " + text);
        let mentioned = [];
        await db.collection("countries").find().forEach((x) => {
            let matches = [];
            for (let i = 0; i < x.names.length; i++) {
                if (text.includes(x.names[i])) {
                    matches.push(x.names[i]);
                }
            }
            if (matches.length > 0) {
                mentioned.push({
                    country: x.code,
                    mentionedNames: matches
                });
                db.collection("teams").find({name: x.owner}).forEach((y) => {
                    //check that its in their lineup, benched countries dont give points
                    if (y.lineup["Europe"] === x.code
                        || y.lineup["North America"] === x.code
                        || y.lineup["South America"] === x.code
                        || y.lineup["Africa"] === x.code
                        || y.lineup["Asia"] === x.code
                        || y.lineup["Oceania"] === x.code
                        || y.lineup["Wildcard"] === x.code
                    ) {
                        db.collection("teams").updateOne({_id: y._id}, {$inc: {score: 1}});
                    }
                });
            }
        });
        db.collection("headlines").insertOne({
            text: text,
            timestamp: Date.now(),
            mentionedCountries: mentioned,
            link: "https://cnn.com" + link
        });
    }
}

main();

checkNews();

//tick once per second
setInterval(() => {tick()}, 1000);
