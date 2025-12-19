function analyzeData(json) {
    let output = json;
    //count recent score to countries
    for (let i = 0; i < output.countries.length; i++) {
        output.countries[i].score = 0;
    }
    //for each headline
    for (let i = 0; i < output.headlines.length; i++) {
        //check if is in last week (ms * s * m * h * d)
        if (Date.now() - output.headlines[i].timestamp < 1000*60*60*24*7) {
            //for each mentioned country in the headline
            for (let j = 0; j < output.headlines[i].mentionedCountries.length; j++) {
                //find that country
                for (let k = 0; k < output.countries.length; k++) {
                    if (output.countries[k].code === output.headlines[i].mentionedCountries[j].country) {
                        output.countries[k].score++;
                    }
                }
            }
        }
    }
    return output;
}

async function getData() {
    const response = await fetch("data");
    const json = await response.json();
    data = analyzeData(json);
    buildCountryLeaderboard(data);
    buildPlayerLeaderboard(data);
    buildNewsList(data);
    buildLineup(data);
}

getData();