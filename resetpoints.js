const { MongoClient } = require("mongodb");
async function main() {
    const client = new MongoClient("mongodb://127.0.0.1:27017");
    await client.connect();

    const db = client.db("gamedata");
    const colTeams = db.collection("teams");
    const colTrades = db.collection("trades");
    const colCountries = db.collection("countries");
    const colTradeHistory = db.collection("tradeHistory");
    const colHeadlines = db.collection("headlines");

    colTeams.updateMany({}, {score: 0});
}
main();