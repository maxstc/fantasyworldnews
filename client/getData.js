function analyzeData(json) {
    let output = json;
    //count recent score to countries
    for (let i = 0; i < output.countries.length; i++) {
        output.countries[i].score = 0;
    }
    //for each headline
    for (let i = 0; i < output.headlines.length; i++) {
        //check if is in last week (ms * s * m * h * d)
        if (output.headlines[i].timestamp - Date.now() < 1000*60*60*24*7) {
            //for each mentioned country in the headline
            for (let j = 0; j < output.headlines.mentionedCountries.length; j++) {
                //find that country
                for (let k = 0; k < outout.countries.length; k++) {
                    if (output.countries[k].code === output.headlines.mentionedCountries[j].country) {
                        output.countries.score++;
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
}

getData();