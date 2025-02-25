function buildCountryLeaderboard() {
    let lb = document.getElementById("countryLeaderboard");
    lb.innerHTML = `
<tr>
    <th>Flag</th>
    <th onclick="sortCountryLeaderboardByCountry();" class="clickable">Country</th>
    <th onclick="sortCountryLeaderboardByScore();" class="clickable">Score</th>
    <th onclick="sortCountryLeaderboardByOwner();" class="clickable">Owner</th>
</tr>
`
    let countries = data.countries;
    if (countryLeaderboardSortStyle === "score") {
        //sort by score, then name
        countries.sort((a, b) => {
            a.score = a.names[0].length;
            b.score = b.names[0].length;
            if (a.score === b.score) {
                if (a.names[0] < b.names[0]) {
                    return -1;
                }
                else if (a.names[0] > b.names[0]) {
                    return 1;
                }
                else {
                    return 0;
                }
            }
            else {
                return a.score - b.score;
            }
        });
    }
    else if (countryLeaderboardSortStyle === "owner") {
        //sort by owner, then score, then name
        countries.sort((a, b) => {
            a.score = a.names[0].length;
            b.score = b.names[0].length;
            if (a.owner === b.owner) {
                if (a.score === b.score) {
                    if (a.names[0] < b.names[0]) {
                        return -1;
                    }
                    else if (a.names[0] > b.names[0]) {
                        return 1;
                    }
                    else {
                        return 0;
                    }
                }
                else {
                    return a.score - b.score;
                }
            }
            else {
                if (a.owner < b.owner) {
                    return -1;
                }
                else if (a.owner > b.owner) {
                    return 1;
                }
                else {
                    return 0;
                }
            }
        });
    }
    else {
        //sort by name
        countries.sort((a, b) => {
           if (a.names[0] < b.names[0]) {
                return -1;
            }
            else if (a.names[0] > b.names[0]) {
                return 1;
            }
            else {
                return 0;
            }
        });
    }
    for (let i = 0; i < countries.length; i++) {
        let row = document.createElement("tr");
        let flag = document.createElement("td");
        flag.innerHTML = countries[i].flag;
        let countryName = document.createElement("td");
        countryName.innerHTML = countries[i].names[0];
        let countryOwner = document.createElement("td");
        countryOwner.innerHTML = "";
        let score = document.createElement("td");
        score.innerHTML = countries[i].names[0].length;
        row.appendChild(flag);
        row.appendChild(countryName);
        row.appendChild(score);
        row.appendChild(countryOwner);
        lb.appendChild(row);
    }
}