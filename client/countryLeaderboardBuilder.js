function buildCountryLeaderboard() {
    let lb = document.getElementById("countryLeaderboard");
    for (let i = 0; i < data.countries.length; i++) {
        let row = document.createElement("tr");
        let flag = document.createElement("td");
        flag.innerHTML = data.countries[i].flag;
        let countryName = document.createElement("td");
        countryName.innerHTML = data.countries[i].names[0];
        let countryOwner = document.createElement("td");
        countryOwner.innerHTML = "";
        let score = document.createElement("td");
        score.innerHTML = "0"
        row.appendChild(flag);
        row.appendChild(countryName);
        row.appendChild(score);
        row.appendChild(countryOwner);
        lb.appendChild(row);
    }
}