async function pollForData() {
    const response = await fetch("data");
    const json = await response.json();
    data = json;
}

setInterval(pollForData, 1000)