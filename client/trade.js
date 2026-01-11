function getOwnedCountries() {
    let output = [];
    for (let i = 0; i < data.countries.length; i++) {
        if (data.countries[i].owner === "max") {
            output.push(data.countries[i]);
        }
    }
    return output;
}

function openTradeWindow(targetCountry, targetTeam, display) {
    console.log(targetTeam);
    let tradeWindow = 
`
<p>Trade for ${display}<p>
<p>Select a country to give up</p>
`
    let ownedCountries = getOwnedCountries();
    for (let i = 0; i < ownedCountries.length; i++) {
        tradeWindow += 
`
<input type="radio" id="trade1" name="giveCountry" value="${ownedCountries[i].code}">
<label for="trade1">${ownedCountries[i].names[0]}</label>
<br>
`;
    }
    if (ownedCountries.length < 10) {
        tradeWindow += 
`
<input type="radio" id="trade1" name="giveCountry" value="null">
<label for="trade1">Claim</label>
`;
    }
    tradeWindow +=
`
<br>
<input type="button" onclick="submitTrade('${targetCountry}', '${targetTeam}');" value="Submit Trade" id="submitTradeButton"></input>
`;
    document.getElementById("trade").innerHTML = tradeWindow;
}

function getProposerCountry() {
    let buttons = document.getElementsByName("giveCountry");
    for (let i = 0; i < buttons.length; i++) {
        if (buttons[i].checked) {
            return (buttons[i].value === "null") ? null : buttons[i].value;
        }
    }
}

function submitTrade(targetCountry, targetTeam) {
    document.getElementById("submitTradeButton").setAttribute("disabled", "true");
    fetch("trade", {
        method: "POST",
        body: JSON.stringify({
            "proposerTeam": "max",
            "targetTeam": (targetTeam == "null") ? null : targetTeam,
            "targetCountry": targetCountry,
            "proposerCountry": getProposerCountry()
        }),
        headers: {
            "Content-type": "application/json"
        }
    }).then((res) => res.json())
    .then((json) => console.log(json));
}