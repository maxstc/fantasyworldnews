let continents = ["Europe", "North America", "South America", "Africa", "Asia", "Oceania", "Wildcard"];
let validSlots = {};
for (x in continents) {
    validSlots[continents[x]] = ["None"];
}

//add this player's european countries to validEurope and each other continent + wildcard
function populateValidity(data, team) {
    console.log(team.name);
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
            if (slots[y] === "None") {
                document.getElementById("select" + noSpace).innerHTML += "<option value=null>None</option>";
            }
            else {
                document.getElementById("select" + noSpace).innerHTML += "<option value=\"" + slots[y].code + "\">" + slots[y].displayName + "</option>";
            }
        }
    }
}

function getLineupSelection() {
    let output = {};
    for (x in continents) {
        output[continents[x].replace(/\s+/g, "")] = document.getElementById("select" + continents[x].replace(/\s+/g, "")).value;
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
    .then((json) => console.log(json));
}

document.getElementById("submitLineup").onclick = () => {
    //when you click submit lineup
    postLineup();
}

function buildLineup(data) {
    populateValidity(data, data.teams[1]);
}