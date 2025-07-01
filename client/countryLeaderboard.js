let countryLeaderboardSortStyle = "score";
//score, owner, continent, name

let storedData = {};

function sortCountries(countries, sortStyle) {
    if (sortStyle === "score") {
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
                return b.score - a.score;
            }
        });
    }
    else if (sortStyle === "owner") {
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
                    return b.score - a.score;
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
    else if (sortStyle === "continent") {
        //sort by continent, then score, then name
        countries.sort((a, b) => {
            a.score = a.names[0].length;
            b.score = b.names[0].length;
            if (a.continent === b.continent) {
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
                    return b.score - a.score;
                }
            }
            else {
                if (a.continent < b.continent) {
                    return -1;
                }
                else if (a.continent > b.continent) {
                    return 1;
                }
                else {
                    return 0;
                }
            }
        });
    }
    else { //==="name"
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
}

function buildCountryLeaderboard(data) {
    storedData = data;
    let clb = document.getElementById("countryLeaderboard");
    let countries = data.countries;
    sortCountries(countries, countryLeaderboardSortStyle);

    for (let i = 0; i < countries.length; i++) {
        let row = document.createElement("tr");
        row.className = "clickable";
        row.onclick = ()=>{openTradeWindow(countries[i].code, countries[i].owner, countries[i].flag + " " + countries[i].names[0])};
        let flag = document.createElement("td");
        flag.innerHTML = countries[i].flag;
        let countryName = document.createElement("td");
        countryName.innerHTML = countries[i].names[0];
        let countryOwner = document.createElement("td");
        countryOwner.innerHTML = (countries[i].owner == null) ? "" : countries[i].owner;
        let continent = document.createElement("td");
        continent.innerHTML = countries[i].continent;
        let score = document.createElement("td");
        score.innerHTML = countries[i].names[0].length;
        row.appendChild(flag);
        row.appendChild(countryName);
        row.appendChild(continent);
        row.appendChild(score);
        row.appendChild(countryOwner);
        clb.children[1].appendChild(row);
    }
}

function refreshCountryLeaderboard(data) {
    let clb = document.getElementById("countryLeaderboard");
    let countries = data.countries;
    sortCountries(countries, countryLeaderboardSortStyle);
    for (let i = 0; i < countries.length; i++) {
        clb.children[1].children[i].children[0].innerHTML = countries[i].flag;
        clb.children[1].children[i].children[1].innerHTML = countries[i].names[0];
        clb.children[1].children[i].children[2].innerHTML = countries[i].continent;
        clb.children[1].children[i].children[3].innerHTML = countries[i].names[0].length;
        clb.children[1].children[i].children[4].innerHTML = "owner";
    }
}

function sortCountryLeaderboardByCountry() {
    countryLeaderboardSortStyle = "name";
    refreshCountryLeaderboard(storedData);
}

function sortCountryLeaderboardByOwner() {
    countryLeaderboardSortStyle = "owner";
    refreshCountryLeaderboard(storedData);
}

function sortCountryLeaderboardByScore() {
    countryLeaderboardSortStyle = "score";
    refreshCountryLeaderboard(storedData);
}

function sortCountryLeaderboardByContinent() {
    countryLeaderboardSortStyle = "continent";
    refreshCountryLeaderboard(storedData);
}