polling = true;

async function pollForData() {
    if (!polling) { return; }
    const response = await fetch("data");
    const json = await response.json();
    dataRefresh(json);
}

function dataRefresh(data) {
    refreshCountryLeaderboard(data);
}

pollForData();

setInterval(pollForData, 1000);