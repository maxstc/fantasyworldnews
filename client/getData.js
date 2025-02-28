async function getData() {
    const response = await fetch("data");
    const data = await response.json();
    buildCountryLeaderboard(data);
}

getData();