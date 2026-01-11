//create the DB and populate it

import { MongoClient } from "mongodb";
import { countries } from "../server/countries.js";

async function main() {
    //connect to mongodb
    const client = new MongoClient("mongodb://127.0.0.1:27017");
    await client.connect();

    //creacte columns
    const db = client.db("gamedata");
    const colTeams = db.collection("teams");
    const colTrades = db.collection("trades");
    const colCountries = db.collection("countries");
    const colTradeHistory = db.collection("tradeHistory");
    const colHeadlines = db.collection("headlines");

    //for each country in the JSON object in the countries file, create an entry in the DB
    for (let i = 0; i < countries.length; i++) {
        colCountries.insertOne({
            code: countries[i].countrycode, //for example RU for Russia
            flag: countries[i].flag, //emoji flag
            names: countries[i].name, //for example Russia, Russian for Russia
            continent: countries[i].continent,
            owner: null, //index of the owner
            displayName: countries[i].displayName //display name
        });
    }
    console.log("done")
}
main();