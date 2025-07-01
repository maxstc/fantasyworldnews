let countryLeaderboardSortStyle = "score";
//score, owner, continent, name

let storedData = {};

function sortCountries(countries, sortStyle) {
    if (sortStyle === "score") {//doesnt work cause score isnt calculated yet :P
        fwnSort(countries, ["score","code"]);
    }
    else if (sortStyle === "owner") {
        fwnSort(countries, ["owner","score","code"]);
    }
    else if (sortStyle === "continent") {
        fwnSort(countries, ["continent","score","code"]);
    }
    else { //==="name"
        fwnSort(countries, ["code"]);
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
        clb.children[1].children[i].children[4].innerHTML = countries[i].owner;
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