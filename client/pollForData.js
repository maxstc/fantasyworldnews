polling = true;

async function pollForData() {
    if (!polling) { return; }
    const response = await fetch("data");
    const json = await response.json();
    data = json;
    dataRefresh();
}

function dataRefresh() {
    buildCountryLeaderboard();
}

setInterval(pollForData, 1000);