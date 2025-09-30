let continents = ["Europe", "North America", "South America", "Africa", "Asia", "Oceania", "Wildcard"];
let validSlots = {};
for (x in continents) {
    validSlots[continents[x]] = ["None"];
}

//add this player's european countries to validEurope and each other continent + wildcard
function populateValidity(data, team) {
    for (x in data.countries) {
        if (data.countries[x].owner === team.name) {
            validSlots["Wildcard"].push(data.countries[x]);
            validSlots[data.countries[x].continent].push(data.countries[x]);
        }
    }
    for (x in continents) {
        let noSpace = continents[x].replace(/\s+/g, "");
        let slots = validSlots[continents[x]];
        for (y in slots) {
            let selected = "";
            if (slots[y].code === team.lineup[noSpace]) {
                selected = "selected";
            }

            if (slots[y] === "None") {
                if (team.lineup[continents[x]] === null) {
                    selected = "selected";
                }
                document.getElementById("select" + noSpace).innerHTML += "<option value=null " + selected + ">None</option>";
            }
            else {
                document.getElementById("select" + noSpace).innerHTML += "<option value=\"" + slots[y].code + "\"" + selected + ">" + slots[y].displayName + "</option>";
            }
        }
    }
}

function getLineupSelection() {
    let output = {};
    for (x in continents) {
        let value = document.getElementById("select" + continents[x].replace(/\s+/g, "")).value;
        output[continents[x].replace(/\s+/g, "")] = value === "null" ? null : value;
    }
    return output;
}

function postLineup() {
    document.getElementById("submitLineup").setAttribute("disabled", "true");
    fetch("lineup", {
        method: "POST",
        body: JSON.stringify({
            "team": "max",
            "lineup": getLineupSelection()
        }),
        headers: {
            "Content-type": "application/json"
        }
    }).then((res) => res.json())
    .then((json) => {alert(json.message); location.reload()});
}

document.getElementById("submitLineup").onclick = () => {
    //when you click submit lineup
    postLineup();
}

function buildLineup(data) {
    populateValidity(data, data.teams[1]);
}