function buildActiveTrades(data) {
    console.log(data.trades);
    for (let i = 0; i < data.trades.length; i++) {
        if (data.trades[i].status === "pending" && data.trades[i].targetTeam === userTeam) {
            addTradeToList(data.trades[i]);
        }
    }
}

function addTradeToList(trade) {
    let parentElem = document.getElementById("trade");
    let newTrade = document.createElement("p");
    newTrade.innerHTML = trade.proposerTeam + ": " + trade.proposerCountry + " for " + trade.targetCountry + " <input type='button' value='Accept'></input> <input type='button' value='Decline'></input>";
    parentElem.appendChild(newTrade);
}