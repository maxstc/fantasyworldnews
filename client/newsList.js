function sortHeadlines(hls) {
    hls.sort((a,b) => {
        return b.timestamp - a.timestamp;
    });
}

function timeDiffText(now, then) {
    let diff = now - then;
    let seconds = Math.floor(diff / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);
    if (minutes === 0) {
        return seconds + "s";
    }
    else if (hours === 0) {
        return minutes + "m";
    }
    else if (days === 0) {
        return hours + "h";
    }
    else {
        return days + "d";
    }
}

function buildHeadlineRow(now, hl) {
    let timeDiff = timeDiffText(now, hl.timestamp);
    return timeDiff + " - " + hl.text;
}

function buildNewsList(data) {
    let nl = document.getElementById("news"); //news list
    let hls = data.headlines; //headlines
    sortHeadlines(hls);
    let now = Date.now();

    for (let i = 0; i < hls.length; i++) {
        let row = document.createElement("tr");
        let text = document.createElement("td");
        text.innerHTML = `<a href="https://archive.is/${hls[i].link}" target="_blank" rel="noopener noreferrer">${buildHeadlineRow(now, hls[i])}</a>`;
        row.appendChild(text);
        nl.children[1].appendChild(row);
    }
}