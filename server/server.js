let port = 41399;

const MAX_COUNTRIES = 10;

import { MongoClient } from "mongodb";
const client = new MongoClient("mongodb://127.0.0.1:27017");
client.connect();
const db = client.db("gamedata");

import express from "express";
const app = express();
app.use(express.json());

//Can pass port as first argument (or leave empty for default value)
if (process.argv.length > 2) {
    port = parseInt(process.argv[2]);
}

//adds a proposal to the list of proposals
//does not execute a trade
function handleTrade(reqBody) {
    let timestamp = Date.now();
    let proposerTeam = reqBody.proposerTeam;
    let targetTeam = reqBody.targetTeam;
    let proposerCountry = reqBody.proposerCountry;
    let targetCountry = reqBody.targetCountry;
    let status = "pending";

    console.log(reqBody);

    if (targetTeam === null) { //swapping to an unselected country
        //check the country is unclaimed
        if (db.collection("countries").find({code: targetCountry}).next().owner != null) {
            return {success: false, message: "The country you tried to claim has an owner."};
        }
        //check if the proposer has less than the maximum number of countries
        if (proposerCountry == null) {
            if (db.collection("countries").find({owner: proposerTeam}).numReturned >= MAX_COUNTRIES) {
                return {success: false, message: "You already have the maximum number of countries claimed."};
            }
            else {
                doSwap(proposerTeam, targetTeam, proposerCountry, targetCountry);
                return {success: true, message: "Success"};
            }
        }
        //check the proposer has the country they are trying to give up
        if (db.collection("countries").find({code: proposerCountry}).next().owner != proposerTeam) {
            return {success: false, message: "You don't own the country you tried to swap."};
        }

        doSwap(proposerTeam, targetTeam, proposerCountry, targetCountry);
        return {success: true};
    }

    if (db.collection("countries").find({code: targetCountry}).next().owner != targetTeam) {
        return {success: false, message: "The person you tried to swap with no longer has that country."};
    }
    if (db.collection("countries").find({code: proposerCountry}).next().owner != proposerTeam) {
        return {success: false, message: "You don't have the country you tried to swap."};
    }

    //check if proposal already exists between these two players
    if (db.collection("trades").find({proposerTeam: proposerTeam, targetTeam: targetTeam, status: "pending"}).next() != null) {
        return {success: false, message: "You already have a trade pending with this player"};
    }

    //add this proposal
    db.collection("trades").insertOne({
        timestamp: timestamp,
        proposerTeam: proposerTeam,
        targetTeam: targetTeam,
        proposerCountry: proposerCountry,
        targetCountry: targetCountry,
        status: status
    });

    return {success: true, message: "Success"};
}

function handleDeclineTrade(reqBody) {
    db.collection("trades").updateOne({_id: reqBody.tradeId}, {$set: {status: "declined"}});
}

function handleAcceptTrade(reqBody) {
    db.collection("trades").updateOne({_id: reqBody.tradeId}, {$set: {status: "accepted"}});
    let trade = db.collection("trades").findOne({_id: reqBody.tradeId}).next();
    doSwap(trade.proposerTeam, trade.targetTeam, trade.proposerCountry, trade.targetCountry);
}

//remove any trades that reference a given country
function removeInvalidTrades(country) {
    db.collection("trades").updateMany({targetCountry: country, status: "pending"}, {$set: {status: "canceled"}});
    db.collection("trades").updateMany({proposerCountry: country, status: "pending"}, {$set: {status: "canceled"}});
}

function doSwap(proposerTeam, targetTeam, proposerCountry, targetCountry) {
    db.collection("countries").updateOne({code: targetCountry}, {$set: {owner: proposerTeam}});
    removeInvalidTrades(targetCountry);
    db.collection("countries").updateOne({code: proposerCountry}, {$set: {owner: targetTeam}});
    removeInvalidTrades(proposerCountry);
}

function updateDB() {

}

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.post("/trade", (req, res) => {
    res.set("Access-Control-Allow-Origin", "http://localhost:3000");
    res.json(handleTrade(req.body));
});

app.post("/declinetrade", (req, res) => {
    res.set("Access-Control-Allow-Origin", "http://localhost:3000");
    res.json(handleDeclineTrade(req.body));
});

app.post("/accepttrade", (req, res) => {
    res.set("Access-Control-Allow-Origin", "http://localhost:3000");
    res.json(handleAcceptTrade(req.body));
});

app.get("/", (req, res) => {
    //have them enter a team name then redirect to /team/<teamname>
    res.redirect("/index.html");
});

app.get("/team/:teamName", async (req, res) => {
    //set the teamName to a session cookie and redirect them to index.html
    console.log(req.params.teamName);
    let id = await db.collection("teams").find({name: req.params.teamName}).next();
    if (id === null) {
        res.end("name not found :( make sure it's correct (case sensitive) and don't include <> in your team name (for example, /team/max)");
        return;
    }
    id = id._id.toString();
    res.cookie("login", id);
    res.redirect("/index.html");
});

app.get("/data", async (req, res) => {
    res.set("Access-Control-Allow-Origin", "http://localhost:3000");
    res.send(JSON.stringify({
        teams: await db.collection("teams").find().toArray(),
        trades: await db.collection("teams").find({$or: [{targetTeam: req.body.teamName}, {proposerTeam: req.body.teamName}]}).toArray(),
        countries: await db.collection("countries").find().toArray(),
        headlines: await db.collection("headlines").find().toArray()
    }));
});

app.use(express.static("client/"));

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});

setInterval(()=>{updateDB()}, 1000);