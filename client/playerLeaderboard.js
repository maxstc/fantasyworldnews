let playerLeaderboardIsBuilt = false;
let playerLeaderboardSortStyle = "score";

//take a teamname and return "<countries in lineup>--<countries on bench>" (in order of recent score)
function getCountries(data, team) {
    let lineupCountries = [];
    let benchCountries = [];
    for (let i = 0; i < data.countries.length; i++) {
        if (data.countries[i].owner === team.name) {
            if (team.lineup["Europe"] === data.countries[i].code
                || team.lineup["North America"] === data.countries[i].code
                || team.lineup["South America"] === data.countries[i].code
                || team.lineup["Africa"] === data.countries[i].code
                || team.lineup["Asia"] === data.countries[i].code
                || team.lineup["Oceania"] === data.countries[i].code
                || team.lineup["Wildcard"] === data.countries[i].code
            ) {
                lineupCountries.push(data.countries[i]);
            }
            else {
                benchCountries.push(data.countries[i]);
            }
        }
    }
    let output = "";
    for (let i = 0; i < lineupCountries.length; i++) {
        output += lineupCountries[i].flag + " ";
    }
    output += "- "
    for (let i = 0; i < benchCountries.length; i++) {
        output += benchCountries[i].flag + " ";
    }
    return output;
}

function buildPlayerLeaderboard(data) {
    let lb = document.getElementById("playerLeaderboard");
    lb.innerHTML = `
<table id="playerLeaderboard">
    <thead>
        <tr>
            <th onclick="sortPlayerLeaderboardByPlayer()" class="clickable">Player</th>
            <th onclick="sortPlayerLeaderboardByScore()" class="clickable">Score</th>
            <th>Countries</th>
        </tr>
    </thead>
    <tbody>

    </tbody>
</table>
`
    let teams = data.teams;
    if (playerLeaderboardSortStyle === "score") {//doesnt work cause score isnt calculated yet :P
        fwnSort(teams, ["score","name"]);
    }
    else { //==="name"
        fwnSort(teams, ["name"]);
    }
    for (let i = 0; i < teams.length; i++) {
        let row = document.createElement("tr");
        let name = document.createElement("td");
        name.innerHTML = teams[i].name;
        let score = document.createElement("td");
        score.innerHTML = teams[i].score;
        let countries = document.createElement("td");
        countries.classList.add("flag-shadow");
        countries.innerHTML = getCountries(data, teams[i]);
        row.appendChild(name);
        row.appendChild(score);
        row.appendChild(countries);
        lb.children[1].appendChild(row);
    }
}

function refreshPlayerLeaderboard(data) {
    if (!playerLeaderboardIsBuilt) {
        buildPlayerLeaderboard(data);
        playerLeaderboardIsBuilt = true;
        return;
    }
    let lb = document.getElementById("playerLeaderboard");
    let teams = data.teams;
    if (playerLeaderboardSortStyle === "score") {//doesnt work cause score isnt calculated yet :P
        fwnSort(teams, ["score","name"]);
    }
    else { //==="name"
        fwnSort(teams, ["name"]);
    }
       for (let i = 0; i < teams.length; i++) {
        lb.children[1].children[i].children[0].innerHTML = teams[i].name;
        lb.children[1].children[i].children[1].innerHTML = teams[i].score;
        lb.children[1].children[i].children[2].innerHTML = "tba";
    }
}

function sortPlayerLeaderboardByPlayer() {
    playerLeaderboardSortStyle = "name";
}

function sortPlayerLeaderboardByScore() {
    playerLeaderboardSortStyle = "score";
}