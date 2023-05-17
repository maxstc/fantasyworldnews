let port = 41399;

let teams;

const fs = require("fs");
const countries = require("./countries").countries;

const express = require("express");
const app = express();

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
    console.log("-----");
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
            if (left.toUpperCase() == left.toLowerCase() && right.toUpperCase() == right.toUpperCase()) {
                split1Count++;
            }
        }

        for (let j = 0; j < split2.length - 1; j++) {
            let left = split2[j].charAt(split2[j].length - 1);
            let right = split2[j+1].charAt(0);
            if (left.toUpperCase() == left.toLowerCase() && right.toUpperCase() == right.toUpperCase()) {
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

        for (let j = 0; j < teams.length; j++) {
            if (teams[j].countries[0].flag === frontendCountries[i].flag) {
                teams[j].countries[0].score = frontendCountries[i].score;
                teams[j].score += frontendCountries[i].score;
            }
            else if (teams[j].countries[1].flag === frontendCountries[i].flag) {
                teams[j].countries[1].score = frontendCountries[i].score;
                teams[j].score += frontendCountries[i].score;
            }
        }
    }

    for (let i = 0; i < frontendCountries.length; i++) {
        if (frontendCountries[i].amount != 0) {
            console.log(frontendCountries[i]);
        }
    }
}

fs.readFile("./gamedata.json", (err, data) => {
    if (err) {
        console.log(err);
    }
    teams = JSON.parse(data + "").teams;

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
            teams: teams
        }));
    })

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
        }
    }, 1000);
});