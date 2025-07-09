function analyzeData(json) {
    let output = json;
    return output;
}

async function getData() {
    const response = await fetch("data");
    const json = await response.json();
    data = analyzeData(json);
    buildCountryLeaderboard(data);
    buildPlayerLeaderboard(data);
    buildNewsList(data);
}

getData();