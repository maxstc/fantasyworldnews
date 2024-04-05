let port = 41399;

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
    console.log("Got a trade:");
    console.log(reqBody);
    let proposerTeam = reqBody.proposerTeam;        //team id
    let targetTeam = reqBody.targetTeam;            //team id
    let proposerCountries = reqBody.proposerCountries;  //country ids (in all countries)
    let targetCountries = reqBody.targetCountries;      //country ids (in all countries)
    //check trade is valid (proposer and target have the corresponding countries of the trade)
    if (targetTeam === null) { //swapping an unselected country
        if (!teams[proposerTeam].countries.includes(proposerCountry)) {
            console.log("Invalid trade, proposer does not have country for swap");
            return;
        }
        //check that country is unclaimed
        
        claimCountry(proposerTeam, proposerCountry, targetCountry);
        removeInvalidTrades(proposerCountry);
        return;
    }
    if (!teams[proposerTeam].countries.includes(proposerCountry) || !teams[targetTeam].countries.includes(targetCountry)) {
        console.log("Invalid trade, one part is missing country");
        return;
    }
    //cant trade with yourself
    if (proposerTeam === targetTeam) {
        console.log("Proposer and target are the same");
        return;
    }
    //check if proposal already exists, remove it if it does
    for (let i = 0; i < trades.length; i++) {
        if (
            trades[i].proposerTeam === proposerTeam 
            && trades[i].targetTeam === targetTeam 
            && trades[i].proposerCountry === proposerCountry 
            && trades[i].targetCountry === targetCountry) {
                //trade already exists, remove this older one
                trades.splice(i, 1);
                i--;
        }
        else if (
            trades[i].proposerTeam === targetTeam
            && trades[i].targetTeam === proposerTeam
            && trades[i].proposerCountry === targetCountry 
            && trades[i].targetCountry === proposerCountry) {
                //trade already exists in opposite direction, execute the trade
                executeTrade(tradeId);
                removeInvalidTrades(proposerCountry);
                removeInvalidTrades(targetCountry);
                trades.splice(i, 1);
                i--;
        }
    }
    //add this proposal
    trades[trades.length] = {
        proposerTeam: proposerTeam,
        targetTeam: targetTeam,
        proposerCountry: proposerCountry,
        targetCountry: targetCountry,
        timestamp: Date.now(),
        hourAdded: new Date().getHours()
    }
    console.log(trades);
}

//can be done by proposer or target
function handleDeclineTrade(reqBody) {
    console.log("Declining trade:");
    console.log(reqBody);
    let team = reqBody.team;
    let tradeId = reqBody.tradeId;
    let timestamp = reqBody.timestamp;
    if (trades[tradeId].proposerTeam === team || trades[tradeId].targetTeam === team) {
        if (trades[tradeId].timestamp === timestamp) {
            trades.splice(tradeId, 1);
        }
        else {
            console.log("Trade decline has been moved or already declined.");
        }
    }
    else {
        console.log("Invalid trade decline.");
    }
}

//can only be done by target
function handleAcceptTrade(reqBody) {
    console.log("Accepting trade:");
    console.log(reqBody);
    let team = reqBody.team;
    let tradeId = reqBody.tradeId;
    let timestamp = reqBody.timestamp;
    if (trades[tradeId].targetTeam === team) {
        if (trades[tradeId].timestamp === timestamp) {
            executeTrade(tradeId);
            trades.splice(tradeId, 1);
        }
        else {
            console.log("Trade accept has been moved or already declined.");
        }
    }
    else {
        console.log("Invalid trade accept.");
    }
}

//remove any trades that reference a given country
function removeInvalidTrades(country) {
    for (let i = 0; i < trades.length; i++) {
        if (trades[i].proposerCountry === country || trades[i].targetCountry === country) {
            trades.splice(i, 1);
            i--;
        }
    }
}

function claimCountry(proposerTeam, proposerCountry, targetCountry) {
    for (let i = 0; i < teams[proposerTeam].countries.length; i++) {
        if (teams[proposerTeam].countries[i] === proposerCountry) {
            teams[proposerTeam].countries[i] = targetCountry;
        }
    }
    console.log("Country claimed.");
}

//executes a trade in the array "trades" at index tradeId.
function executeTrade(tradeId) {
    let team1 = trades[tradeId].proposerTeam;
    let team2 = trades[tradeId].targetTeam;
    let country1 = trades[tradeId].proposerCountry;
    let country2 = trades[tradeId].targetCountry;

    for (let i = 0; i < teams[team1].countries.length; i++) {
        if (teams[team1].countries[i] === country1) {
            teams[team1].countries[i] = country2;
        }
    }
    for (let i = 0; i < teams[team2].countries.length; i++) {
        if (teams[team2].countries[i] === country2) {
            teams[team2].countries[i] = country1;
        }
    }

    console.log("Trade executed.");
}

fs.readFile("./gamedata.json").then((data) => {
    let parsedData = JSON.parse(data + "");
    teams = parsedData.teams;
    trades = parsedData.trades;

    app.post("/trade", (req, res) => {
        handleTrade(req.body);
        res.json(true);
    });

    app.post("/declinetrade", (req, res) => {
        handleDeclineTrade(req.body);
        res.json(true);
    });

    app.post("/accepttrade", (req, res) => {
        handleAcceptTrade(req.body);
        res.json(true);
    });

    app.get("/", (req, res) => {
        //have them enter a team name then redirect to /team/<teamname>
        res.end("Please add \"/team/<your team name>\" to the address bar. For example, if you went to 123.10.10.123:41399, instead go to 123.10.10.123:41399/team/max if your team name is max. This is case sensitive.");
    });

    app.get("/team/:teamName", (req, res) => {
        //set the teamName to a session cookie and redirect them to index.html
        res.cookie("teamName", req.params.teamName);
        res.redirect("/index.html");
    });

    app.get("/data", (req, res) => {
        res.set("Access-Control-Allow-Origin", "http://localhost:3000");
        res.send(JSON.stringify({
            countries: frontendCountries,
            teams: teams,
            trades: trades
        }));
    });

    app.use(express.static("react/build/"));

    app.listen(port, () => {
        console.log(`Server started on port ${port}`);
    });

    let lastHour = new Date().getHours();

    //checkNews();

    //update each time the hour changes
    setInterval(() => {
        let currentHour = new Date().getHours();
        if (currentHour != lastHour) {
            checkNews();
            lastHour = currentHour;
            for (let i = 0; i < trades.length; i++) {
                if (trades[i].hourAdded === currentHour) {
                    trades.splice(i, 1);
                    i--;
                }
            }
        }
    }, 1000);

    const stdin = process.openStdin();

    stdin.addListener("data", function(d) {
        if (d.toString().trim() === "stop") {
            console.log("Stopping the server");
            process.exit();
        }
    });
});