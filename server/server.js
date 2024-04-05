let port = 41399;

const MAX_COUNTRIES = 4;

const { MongoClient } = require("mongodb");
const client = new MongoClient("mongodb://127.0.0.1:27017");
client.connect();
const db = client.db("gamedata");

const express = require("express");
const app = express();
app.use(express.json());

//Can pass port as first argument (or leave empty for default value)
if (process.argv.length > 2) {
    port = parseInt(process.argv[2]);
}

//adds a proposal to the list of proposals
//does not execute a trade (unless an opposite trade already existed)
function handleTrade(reqBody) {
    let timestamp = Date.now();
    let proposerTeam = reqBody.proposerTeam;
    let targetTeam = reqBody.targetTeam;
    let proposerCountry = reqBody.proposerCountry;
    let targetCountry = reqBody.targetCountry;
    let proposerPointsOffered = Math.floor(reqBody.proposerPointsOffered);
    if (isNaN(proposerPointsOffered)) {
        proposerPointsOffered === 0;
    }
    let status = "pending";

    if (targetTeam === null) { //swapping to an unselected country
        //check the country is unclaimed
        if (db.collection("countries").find({_id: targetCountry}).next().owner != null) {
            return {success: false, message: "The country you tried to claim has an owner."};
        }
        //check the proposer has the country
        if (db.collection("countries").find({_id: proposerCountry}).next().owner != proposerTeam) {
            return {success: false, message: "You don't own the country you tried to swap."};
        }

        doSwap(proposerTeam, targetTeam, proposerCountry, targetCountry);
        return {success: true};
    }

    if (db.collection("countries").find({_id: targetCountry}).next().owner != targetTeam) {
        return {success: false, message: "The person you tried to swap with no longer has that country."};
    }
    if (db.collection("countries").find({_id: proposerCountry}).next().owner != proposerTeam) {
        return {success: false, message: "You don't have the country you tried to swap."};
    }
    if (db.collection("teams").find({_id: targetCountry}).next().score * -1 < proposerPointsOffered) {
        return {success: false, message: "They don't have enough points for this trade."};
    }
    if (db.collection("teams").find({_id: proposerCountry}).next().score < proposerPointsOffered) {
        return {success: false, message: "You don't have enough points for this trade."};
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
        proposerPointsOffered: proposerPointsOffered,
        status: status
    });
}

function handleBid(reqBody) {
    let timestamp = Date.now();
    let proposerTeam = reqBody.proposerTeam;
    let targetTeam = null;
    let proposerCountry = reqBody.proposerCountry;
    let targetCountry = reqBody.targetCountry;
    let proposerPointsOffered = Math.floor(reqBody.proposerPointsOffered);
    if (isNaN(proposerPointsOffered)) {
        return {success: false, message: "The offered number of points to bid was not a number."};
    }
    if (proposerPointsOffered < 1) {
        return {success: false, message: "You must bid at least 1 point."};
    }
    let status = "bid";

    if (db.collection("countries").find({_id: targetCountry}).next().owner === null) {
        return {success: false, message: "The country you tried to bid on has no owner."};
    }
    //check the proposer has the country
    if (db.collection("countries").find({_id: proposerCountry}).next().owner != proposerTeam) {
        return {success: false, message: "You don't own the country you tried to bid with."};
    }
    if (db.collection("teams").find({_id: proposerCountry}).next().score < proposerPointsOffered) {
        return {success: false, message: "You don't have enough points for this bid."};
    }
    //check if proposal already exists between these two players
    if (db.collection("trades").find({proposerTeam: proposerTeam, targetCountry: targetCountry, status: "bidpending"}).next() != null) {
        return {success: false, message: "You already have a bid for this country."};
    }

    //add this proposal
    db.collection("trades").insertOne({
        timestamp: timestamp,
        proposerTeam: proposerTeam,
        targetTeam: targetTeam,
        proposerCountry: proposerCountry,
        targetCountry: targetCountry,
        proposerPointsOffered: proposerPointsOffered,
        status: status
    });
}

function handleDeclineTrade(reqBody) {
    db.collection("trades").updateOne({_id: reqBody.tradeId}, {status: "declined"});
}

function handleAcceptTrade(reqBody) {
    db.collection("trades").updateOne({_id: reqBody.tradeId}, {status: "accepted"});
    let trade = db.collection("trades").findOne({_id: reqBody.tradeId}).next();
    doSwap(trade.proposerTeam, trade.targetTeam, trade.proposerCountry, trade.targetCountry);
    changePoints(trade.proposerTeam, -1 * trade.proposerPointsOffered);
    changePoints(trade.targetTeam, trade.proposerPointsOffered);
}

//remove any trades that reference a given country
function removeInvalidTrades(country) {
    db.collection("trades").updateMany({targetCountry: country, status: "pending"}, {status: "canceled"});
    db.collection("trades").updateMany({proposerCountry: country, status: "pending"}, {status: "canceled"});
}

//important: this only removes bids where the proposer country is the given country
function removeInvalidBids(country) {
    db.collection("trades").updateMany({proposerCountry: country, status: "bidpending"}, {status: "bidcanceled"});
}

function doSwap(proposerTeam, targetTeam, proposerCountry, targetCountry) {
    db.collection("countries".updateOne({_id: proposerCountry}, {owner: targetTeam}));
    db.collection("countries".updateOne({_id: targetCountry}, {owner: proposerTeam}));
    removeInvalidTrades(proposerCountry);
    removeInvalidTrades(targetCountry);
    removeInvalidBids(proposerCountry);
    removeInvalidBids(targetCountry);
}

function handleRenew(reqBody) {
    let winningBid = db.collection("trades")
    .find({status: "bidpending", targetCountry: reqBody.targetCountry})
    .sort({proposerPointsOffered:-1}).limit(1).next();
    if (winningBid===null) {
        db.collection("countries").updateOne({_id: reqBody.targetCountry}, {lastSwapTimestamp: Date.now(), malus: 0});
        return {success: true, message: "No bids were on your country."};
    }
    else {
        db.collection("trades").updateOne({_id: winningBid._id}, {status: "bidsuccess"});
        db.collection("trades").updateMany({status: "bidpending", targetCountry: reqBody.targetCountry}, {status: "bidfail"});
        doSwap(winningBid.proposerTeam, reqBody.team, winningBid.proposerCountry, winningBid.targetCountry);
    }
}

function updateDB() {
    //check for maluses
    let maluses = [];
    db.collection("countries").find().forEach((x) => {
        if (x.owner != null) {
            if ((Date.now() - lastSwapTimestamp) / (1000 * 60 * 60 * 24) > x.malus + 1) {
                maluses.push({id: x._id, owner: x.owner, amount: x.malus + 1});
            }
        }
    });
    //add maluses
    for (let i = 0; i < maluses.length; i++) {
        db.collection("teams").updateOne(
            {_id: maluses[i].owner},
            {$inc: {score: maluses[i].amount}}
        );
        db.collection("countries").updateOne(
            {_id: maluses[i].id},
            {$inc: {malus: 1}}
        );
    }
}

app.post("/trade", (req, res) => {
    res.json(handleTrade(req.body));
});

app.post("/bid", (req, res) => {
    res.json(handleBid(req.body));
});

app.post("/renew", (req, res) => {
    res.json(handleRenew(req.body));
})

app.post("/declinetrade", (req, res) => {
    res.json(handleDeclineTrade(req.body));
});

app.post("/accepttrade", (req, res) => {
    res.json(handleAcceptTrade(req.body));
});

app.get("/", (req, res) => {
    //have them enter a team name then redirect to /team/<teamname>
    res.end("Please add \"/team/<your team name>\" to the address bar. For example, if you went to 123.10.10.123:41399, instead go to 123.10.10.123:41399/team/max if your team name is max. This is case sensitive.");
});

app.get("/team/:teamName", (req, res) => {
    //set the teamName to a session cookie and redirect them to index.html
    res.cookie("teamName", db.collection("teams").find({name: req.params.teamName}).next()._id);
    res.redirect("/index.html");
});

app.get("/data", async (req, res) => {
    res.set("Access-Control-Allow-Origin", "http://localhost:3000");
    res.send(JSON.stringify({
        teams: await db.collection("teams").find().toArray(),
        trades: await db.collection("teams").find({$or: [{targetTeam: req.body.teamName}, {proposerTeam: req.body.teamName}]}).toArray(),
        countries: await db.collection("countries").toArray(),
        headlines: await db.collection("headlines").toArray()
    }));
});

app.use(express.static("react/build/"));

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});

setInterval(()=>{updateDB()}, 1000);