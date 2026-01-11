// const cheerio = require("cheerio");
import { MongoClient } from "mongodb";

async function main() {

    const client = new MongoClient("mongodb://127.0.0.1:27017");
    await client.connect();
    let db = client.db("gamedata").collection("countries");

    db.updateMany({}, {$set: {"displayName": "$names[0]"}});

}

main();
// let db;
// let colTeams;
// let colTrades;
// let colCountries;
// let colTradeHistory;
// let colHeadlines;

// async function main() {
//     const client = new MongoClient("mongodb://127.0.0.1:27017");
//     await client.connect();

//     db = client.db("gamedata");
//     colTeams = db.collection("teams");
//     colTrades = db.collection("trades");
//     colCountries = db.collection("countries");
//     colTradeHistory = db.collection("tradeHistory");
//     colHeadlines = db.collection("headlines");

//     const response = await fetch("https://www.cnn.com/world");
//     const responseText = await response.text();
//     let doc = cheerio.load(responseText);
//     doc(".container__headline-text").map(async (index, element) => {
//         await processHeadline(doc(element).text());
//     });
// }

// async function processHeadline(text) {
//     let cursor = colHeadlines.find({text: text});
//     cursor = await cursor.toArray();
//     if (cursor.length === 0) {
//         console.log("new headline: " + text);
//         let mentioned = [];
//         await colCountries.find().forEach((x) => {
//             let matches = [];
//             for (let i = 0; i < x.names.length; i++) {
//                 if (text.includes(x.names[i])) {
//                     matches.push(x.names[i]);
//                 }
//             }
//             if (matches.length > 0) {
//                 mentioned.push({
//                     country: x._id,
//                     mentionedNames: matches
//                 });
//             }
//         });
//         colHeadlines.insertOne({
//             text: text,
//             timestamp: Date.now(),
//             mentionedCountries: mentioned
//         });
//     }
// }

// main();