import { MongoClient } from "mongodb";

async function main() {
    const client = new MongoClient("mongodb://127.0.0.1:27017");
    await client.connect();

    const db = client.db("gamedata");
    const colTeams = db.collection("teams");
    const colTrades = db.collection("trades");
    const colCountries = db.collection("countries");
    const colTradeHistory = db.collection("tradeHistory");
    const colHeadlines = db.collection("headlines");

    colTeams.insertOne({
        name: "evan",
        score: 0,
        lineup: {
            "Europe": null,
            "North America": null,
            "South America": null,
            "Africa": null,
            "Asia": null,
            "Oceania": null,
            "Wildcard": null
        }
    });
    console.log("done")
}
main();