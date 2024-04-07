const cheerio = require("cheerio");
const { MongoClient } = require("mongodb");
let db;

let lastUpdate = Date.now();

async function main() {
  const client = new MongoClient("mongodb://127.0.0.1:27017");
  await client.connect();
  db = client.db("gamedata");
}

async function tick() {
  let now = Date.now();
  if (Math.floor(lastUpdate / 60000) < Math.floor(now / 60000)) {
    checkNews();
    lastUpdate = now;
  }
}

async function checkNews() {
  const response = await fetch("https://www.cnn.com/world");
  const responseText = await response.text();
  let doc = cheerio.load(responseText);
  doc(".container__headline-text").map(async (index, element) => {
      await processHeadline(doc(element).text());
  });
}

async function processHeadline(text) {
    let cursor = db.collection("headlines").find({text: text});
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
                    country: x._id,
                    mentionedNames: matches
                });
            }
        });
        db.collection("headlines").insertOne({
            text: text,
            timestamp: Date.now(),
            mentionedCountries: mentioned
        });
        for (let i = 0; i < mentioned; i++) {
            db.collection("teams").updateOne(
                {_id: db.collection("countries").find({_id: mentioned[i]}).next().owner},
                {$inc: {score: 1}}
            );
        }
    }
}

main();

setInterval(() => {tick()}, 1000);