let playerLeaderboardIsBuilt = false;

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
    if (playerLeaderboardSortStyle === "score") {
        //sort by score, then name
        teams.sort((a, b) => {
            if (a.score === b.score) {
                if (a.name < b.name) {
                    return -1;
                }
                else if (a.name > b.name) {
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
    else {
        //sort by name
        teams.sort((a, b) => {
           if (a.name < b.name) {
                return -1;
            }
            else if (a.name > b.name) {
                return 1;
            }
            else {
                return 0;
            }
        });
    }
    for (let i = 0; i < teams.length; i++) {
        let row = document.createElement("tr");
        let name = document.createElement("td");
        name.innerHTML = teams[i].name;
        let score = document.createElement("td");
        score.innerHTML = teams[i].score;
        let countries = document.createElement("td");
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
    if (playerLeaderboardSortStyle === "score") {
        //sort by score, then name
        teams.sort((a, b) => {
            if (a.score === b.score) {
                if (a.name < b.name) {
                    return -1;
                }
                else if (a.name > b.name) {
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
    else {
        //sort by name
        teams.sort((a, b) => {
           if (a.name < b.name) {
                return -1;
            }
            else if (a.name > b.name) {
                return 1;
            }
            else {
                return 0;
            }
        });
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