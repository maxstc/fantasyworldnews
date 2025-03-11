function analyzeData(json) {
    let output = json;
    for (let i = 0; i < json.length; i++) {
        output.countries[json.countries[i]._id] = json.countries[i];
    }
    for (let i = 0; i < json.length; i++) {
        output.teams[json.teams[i]._id] = json.teams[i];
    }
}

async function getData() {
    const response = await fetch("data");
    const json = await response.json();
    data = analyzeData(json);
    buildCountryLeaderboard(data);
    buildNewsList(data);
}

getData();