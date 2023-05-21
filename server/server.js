let port = 41399;

let teams;
let trades;

const fs = require("fs");
const countries = require("./countries").countries;

const express = require("express");
const app = express();
app.use(express.json());

//Can pass port as first argument (or leave empty for default value)
if (process.argv.length > 2) {
    port = parseInt(process.argv[2]);
}

//countries with tabs in the webpage (and need 12 to be subtracted from their totals)
const dozenCountries = ["Australia", "China", "India", "United Kingdom"];

let frontendCountries = [];
for (let i = 0; i < countries.length; i++) {
    frontendCountries[i] = {
        flag: countries[i].flag,
        name: countries[i].name,
        score: 0
    }
}

async function checkNews() {
    console.log("Checking news...");
    console.log(new Date());
    const response = await fetch("https://www.cnn.com/world");
    const responseText = await response.text();

    for (let i = 0; i < frontendCountries.length; i++) {
        frontendCountries[i].score = 0;
    }

    for (let i = 0; i < countries.length; i++) {
        let split1 = responseText.split(countries[i].name[0]);
        let split1Count = 0;
        let split2 = responseText.split(countries[i].name[1]);
        let split2Count = 0;

        //check that the splits are separated by non-alphanumeric stuff
        //i.e. check that the occurences are actual works (so words like "American" won't be recognized as both an occurence of "America" AND "American")
        for (let j = 0; j < split1.length - 1; j++) {
            let left = split1[j].charAt(split1[j].length - 1);
            let right = split1[j+1].charAt(0);
            if (left.toUpperCase() == left.toLowerCase() && right.toUpperCase() == right.toLowerCase()) {
                split1Count++;
            }
        }

        for (let j = 0; j < split2.length - 1; j++) {
            let left = split2[j].charAt(split2[j].length - 1);
            let right = split2[j+1].charAt(0);
            if (left.toUpperCase() == left.toLowerCase() && right.toUpperCase() == right.toLowerCase()) {
                split2Count++;
            }
        }

        frontendCountries[i].score = split1Count + split2Count;
        if (dozenCountries.includes(frontendCountries[i].name[0])) {
            frontendCountries[i].score -= 12;
        }
        if (frontendCountries[i].amount < 0) {
            console.log("NEGATIVE AMOUNT!");
            console.log(frontendCountries);
        }
    }

    for (let i = 0; i < teams.length; i++) {
        teams[i].score += frontendCountries[teams[i].countries[0]].score;
        teams[i].score += frontendCountries[teams[i].countries[1]].score;
    }

    //print out countries that scored
    // for (let i = 0; i < frontendCountries.length; i++) {
    //     if (frontendCountries[i].amount != 0) {
    //         console.log(frontendCountries[i]);
    //     }
    // }
    console.log("Check news done.");
}

//adds a proposal to the list of proposals
//does not execute a trade (unless an opposite trade already existed)
function handleTrade(reqBody) {
    console.log("Got a trade:");
    console.log(reqBody);
    let proposerTeam = reqBody.proposerTeam;        //team index
    let targetTeam = reqBody.targetTeam;            //team index
    let proposerCountry = reqBody.proposerCountry;  //country index (in all countries)
    let targetCountry = reqBody.targetCountry;      //country index (in all countries)
    //check trade is valid (proposer and target have the corresponding countries of the trade)
    if (targetTeam === -1) { //swapping an unselected country
        if (!teams[proposerTeam].countries.includes(proposerCountry)) {
            console.log("Invalid trade");
            return;
        }
        //check no one has that country
        for (let i = 0; i < teams.length; i++) {
            if (teams[i].countries.includes(targetCountry)) {
                console.log("Invalid trade");
                return;
            }
        }
        claimCountry(proposerTeam, proposerCountry, targetCountry);
        removeInvalidTrades(proposerCountry);
        return;
    }
    if (!teams[proposerTeam].countries.includes(proposerCountry) || !teams[targetTeam].countries.includes(targetCountry)) {
        console.log("Invalid trade");
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

fs.readFile("./gamedata.json", (err, data) => {
    if (err) {
        console.log(err);
    }
    let parsedData = JSON.parse(data + "");
    teams = parsedData.teams;
    trades = parsedData.trades;

    app.post("/trade", (req, res) => {
        console.log("POST");
        handleTrade(req.body);
    });

    app.post("/accepttrade", (req, res) => {
        handleAcceptTrade(req.body);
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

    checkNews();

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
    })
});