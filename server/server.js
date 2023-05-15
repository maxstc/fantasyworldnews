let port = 41399;

const countries = require("./countries").countries;
const UPDATE_TIME = 36000000;

//countries with tabs in the webpage (and need 12 to be subtracted from their totals)
const dozenCountries = ["Australia", "China", "India", "United Kingdom"];

//Can pass port as first argument (or leave empty for default value)
if (process.argv.length > 2) {
    port = parseInt(process.argv[2]);
}

const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send(JSON.stringify(countries));
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});

async function checkNews() {
    console.log("-----");
    console.log(new Date());
    const response = await fetch("https://www.cnn.com/world");
    const responseText = await response.text();

    let result = [];

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

        result[i] = {
            flag: countries[i].flag,
            amount: split1Count + split2Count
        }
        if (dozenCountries.includes(countries[i].name[0])) {
            result[i].amount -= 12;
        }
        if (result[i].amount < 0) {
            console.log("NEGATIVE AMOUNT!");
            console.log(result);
        }
    }

    for (let i = 0; i < result.length; i++) {
        if (result[i].amount != 0) {
            console.log(result[i]);
        }
    }
}

let lastHour = new Date().getHours()

checkNews();

setInterval(() => {
    let currentHour = new Date().getHours();
    if (currentHour != lastHour) {
        checkNews();
        lastHour = currentHour;
    }
}, 1000);