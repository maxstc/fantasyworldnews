let tradeWindow = `
<p>Trade for COUTNRY<p>
<p>Select a country to give up</p>
<input type="radio" id="trade1" name="test" value="test2">
<label for="trade1">Trade1</label>
`;

function openTradeWindow(countryCode) {
    alert("Trade for " + countryCode);
    document.getElementById("trade").innerHTML = tradeWindow;
}