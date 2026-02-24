const db = require("../../db");

//adds a proposal to the list of proposals
//does not execute a trade
async function handleTrade(reqBody) {
    let timestamp = Date.now();
    let proposerTeam = reqBody.proposerTeam;
    let targetTeam = reqBody.targetTeam;
    let proposerCountry = reqBody.proposerCountry;
    let targetCountry = reqBody.targetCountry;
    let status = "pending";

    if (targetTeam === null) { //swapping to an unselected country
        //check the country is unclaimed
        if ((await db.collection("countries").find({code: targetCountry}).next()).owner != null) {
            return {success: false, message: "The country you tried to claim has an owner."};
        }
        //check if the proposer has less than the maximum number of countries
        if (proposerCountry == null) {
            if (db.collection("countries").find({owner: proposerTeam}).numReturned >= MAX_COUNTRIES) {
                return {success: false, message: "You already have the maximum number of countries claimed."};
            }
            else {
                //TODO add a trade to the list of trades in the db
                doSwap(proposerTeam, targetTeam, proposerCountry, targetCountry);
                return {success: true, message: "Success"};
            }
        }
        //check the proposer has the country they are trying to give up
        //TODO did i fix this? XD
        //EAT THE PROMISE
        if ((await db.collection("countries").find({code: proposerCountry}).next()).owner != proposerTeam) {
            return {success: false, message: "You don't own the country you tried to swap."};
        }

        //TODO add a trade to the list of trades in the db
        doSwap(proposerTeam, targetTeam, proposerCountry, targetCountry);
        return {success: true, message: "Success"};
    }

    if ((await db.collection("countries").find({code: targetCountry}).next()).owner != targetTeam) {
        return {success: false, message: "The person you tried to swap with no longer has that country."};
    }
    if ((await db.collection("countries").find({code: proposerCountry}).next()).owner != proposerTeam) {
        return {success: false, message: "You don't have the country you tried to swap."};
    }

    //check if proposal already exists between these two players
    if ((await db.collection("trades").find({proposerTeam: proposerTeam, targetTeam: targetTeam, status: "pending"}).next()) != null) {
        return {success: false, message: "You already have a trade pending with this player"};
    }

    //add this proposal
    await db.collection("trades").insertOne({
        timestamp: timestamp,
        proposerTeam: proposerTeam,
        targetTeam: targetTeam,
        proposerCountry: proposerCountry,
        targetCountry: targetCountry,
        status: status
    });

    return {success: true, message: "Success"};
}

//called when a proposee declines a trade or a proposer cancels a trade
//TODO add checks to this
function handleDeclineTrade(reqBody) {
    db.collection("trades").updateOne({_id: reqBody.tradeId}, {$set: {status: "declined"}});
}

//called when a proposee accepts a trade
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

//swap two countries
function doSwap(proposerTeam, targetTeam, proposerCountry, targetCountry) {
    //check if countries are in lineups
    db.collection("teams").find({name: proposerTeam}).forEach((y) => {
        //check that its in their lineup, benched countries dont give points
        let newLineup = y.lineup;
        if (y.lineup["Europe"] === proposerCountry) {
            newLineup["Europe"] = null;
        }
        if (y.lineup["North America"] === proposerCountry) {
            newLineup["North America"] = null;
        }
        if (y.lineup["South America"] === proposerCountry) {
            newLineup["South America"] = null;
        }
        if (y.lineup["Africa"] === proposerCountry) {
            newLineup["Africa"] = null;
        }
        if (y.lineup["Asia"] === proposerCountry) {
            newLineup["Asia"] = null;
        }
        if (y.lineup["Oceania"] === proposerCountry) {
            newLineup["Oceania"] = null;
        }
        if (y.lineup["Wildcard"] === proposerCountry) {
            newLineup["Wildcard"] = null;
        }
        console.log(newLineup);
        db.collection("teams").updateOne({name: proposerTeam}, {$set:{lineup: newLineup}});
    });
    //do the same for the target team/country
    db.collection("teams").find({name: targetTeam}).forEach((y) => {
        //check that its in their lineup, benched countries dont give points
        let newLineup = y.lineup;
        if (y.lineup["Europe"] === targetCountry) {
            newLineup["Europe"] = null;
        }
        if (y.lineup["North America"] === targetCountry) {
            newLineup["North America"] = null;
        }
        if (y.lineup["South America"] === targetCountry) {
            newLineup["South America"] = null;
        }
        if (y.lineup["Africa"] === targetCountry) {
            newLineup["Africa"] = null;
        }
        if (y.lineup["Asia"] === targetCountry) {
            newLineup["Asia"] = null;
        }
        if (y.lineup["Oceania"] === targetCountry) {
            newLineup["Oceania"] = null;
        }
        if (y.lineup["Wildcard"] === targetCountry) {
            newLineup["Wildcard"] = null;
        }
        console.log(newLineup);
        db.collection("teams").updateOne({name: targetTeam}, {$set:{lineup: newLineup}});
    });
    db.collection("countries").updateOne({code: targetCountry}, {$set: {owner: proposerTeam}});
    removeInvalidTrades(targetCountry);
    db.collection("countries").updateOne({code: proposerCountry}, {$set: {owner: targetTeam}});
    removeInvalidTrades(proposerCountry);
}

exports.trade = async (req, res) => {
    res.set("Access-Control-Allow-Origin", "http://localhost:3000");
    res.json(await handleTrade(req.body));
};

exports.declineTrade = async (req, res) => {
    res.set("Access-Control-Allow-Origin", "http://localhost:3000");
    res.json(await handleDeclineTrade(req.body));
};

exports.proposeTrade = async (req, res) => {
    res.set("Access-Control-Allow-Origin", "http://localhost:3000");
    res.json(await handleAccept(req.body));
};