import React, { useState } from 'react';
import './App.css';

const App = (props) => {
    let countries = {};
    let teams = {};

    const [selectedCountry, setSelectedCountry] = React.useState("");
    const [leftTab, setLeftTab] = React.useState(0);

    for (let i = 0; i < props.data.teams.length; i++) {
        teams[props.data.teams[i]._id] = props.data.teams[i];
    }

    for (let i = 0; i < props.data.countries.length; i++) {
        countries[props.data.countries[i]._id] = props.data.countries[i];
        countries[props.data.countries[i]._id].recentScore = 0;
    }

    let headlines = [];
    for (let i = 0; i < props.data.headlines.length; i++) {
        if (Date.now() - props.data.headlines[i].timestamp < 1000*60*60*24*7 && props.data.headlines[i].mentionedCountries.length > 0) {
            headlines.push(props.data.headlines[i]);
        }
    }
    headlines.sort((a, b) => {return b.timestamp - a.timestamp});
    for (let i = 0; i < headlines.length; i++) {
        for (let j = 0; j < headlines[i].mentionedCountries.length; j++) {
            countries[headlines[i].mentionedCountries[j].country].recentScore++;
        }
    }

    let trades = [];
    for (let i = 0; i < props.data.trades.length; i++) {
        if (props.data.trades[i].status === "accepted" || props.data.trades[i].status === "bidsuccess") {
            trades.push(props.data.trades[i]);
        }
    }
    trades.sort((a,b)=>{return b.timestamp - a.timestamp});

    let log = trades.concat(headlines);
    log.sort((a,b)=>{return b.timestamp - a.timestamp});

    let azCountries = Object.keys(countries).map((key) => {return countries[key]}).sort((a,b) => {
        if (a.names[0] < b.names[0]) {
            return -1;
        }
        else {
            return 1;
        }
    }).filter((a) => {return a.names[0] != "Israel"});

    let displayedCountries = azCountries.slice();
    displayedCountries.sort((a,b) => {return b.recentScore - a.recentScore});

    const countryList = displayedCountries.map((country, i) => 
        <tr key={i}>
            <td
            style={{cursor: "pointer"}} 
            onClick={()=>{setSelectedCountry(country._id)}}
            onMouseEnter={(e)=>{e.target.style.color="blue"}}
            onMouseLeave={(e)=>{e.target.style.color="black"}}>
                <img width="20" src={"http://purecatamphetamine.github.io/country-flag-icons/3x2/" + country.code + ".svg"} style={{border: "1px solid black", boxSizing: "border-box"}}/>
                {" " + country.names[0]}</td>
            <td>{country.recentScore}</td>
            <td>{(country.owner === null) ? "Unowned" : teams[country.owner].name}</td>
        </tr>
    );

    const azList = azCountries.map((country, i) => 
        <tr key={i}>
            <td
            style={{cursor: "pointer"}} 
            onClick={()=>{setSelectedCountry(country._id)}}
            onMouseEnter={(e)=>{e.target.style.color="blue"}}
            onMouseLeave={(e)=>{e.target.style.color="black"}}>
                <img width="20" src={"http://purecatamphetamine.github.io/country-flag-icons/3x2/" + country.code + ".svg"} style={{border: "1px solid black", boxSizing: "border-box"}}/>
                {" " + country.names[0]}</td>
            <td>{country.recentScore}</td>
            <td>{(country.owner === null) ? "Unowned" : teams[country.owner].name}</td>
        </tr>
    );

    function getTimeAgo(date) {
        var seconds = Math.floor((new Date() - date) / 1000);

        var interval = seconds / 31536000;

        if (interval > 1) {
            return Math.floor(interval) + "y";
        }
        interval = seconds / 2592000;
        if (interval > 1) {
            return Math.floor(interval) + "mo";
        }
        interval = seconds / 86400;
        if (interval > 1) {
            return Math.floor(interval) + "d";
        }
        interval = seconds / 3600;
        if (interval > 1) {
            return Math.floor(interval) + "h";
        }
        interval = seconds / 60;
        if (interval > 1) {
            return Math.floor(interval) + " m";
        }
        return "<1 m";
    }

    const centerList = log.map(l => 
        <p style={{textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden", width: "98%"}}>
            {(l.status === undefined) ?
            "📰 (" + getTimeAgo(l.timestamp) + ") " + l.text
            :
            ((l.status === "bidsuccess") ?
            "💸 (" + getTimeAgo(l.timestamp) + ") "
            :
            "🤝 (" + getTimeAgo(l.timestamp) + ") "
            )}
        </p>
    );

    function getRecentHeadlines(selectedCountry) {
        let newHeadlines = headlines;
        newHeadlines = newHeadlines.filter((hl) => {
            for (let i = 0; i < hl.mentionedCountries.length; i++) {
                if (hl.mentionedCountries[i].country === selectedCountry) {
                    return true;
                }
            }
            return false;
        });
        return newHeadlines.slice(0,3);
    }

    function tradeCountry() {
        let proposerCountry = null;
        for (let i = 0; i < document.getElementsByClassName("offeredCountrySelector").length; i++) {
            if (document.getElementsByClassName("offeredCountrySelector")[i].checked) {
                proposerCountry = document.getElementsByClassName("offeredCountrySelector")[i].value;
            }
        }
        fetch("http://" + window.location.hostname + (window.location.port != "" ? ":" + window.location.port : "") + "/trade", {
            method: "post",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                proposerTeam: props.login,
                proposerCountry: countries[proposerCountry],
                targetTeam: countries[selectedCountry].owner,
                targetCountry: countries[selectedCountry],
                proposerPointsOffered: (document.getElementById("pointsOfferedCounter") === null ? 0 : document.getElementById("pointsOfferedCounter").value)
            })
            }).then((data) => {
            data.json().then((data) => {
                console.log(data);
            })
        });
    }

    const sideActions = (selectedCountry === "") ?
    <p></p>
    :
    <div>
        <h1>{countries[selectedCountry].names[0]} <img width="40" src={"http://purecatamphetamine.github.io/country-flag-icons/3x2/" + countries[selectedCountry].code + ".svg"} style={{border: "1px solid black", boxSizing: "border-box"}}/></h1>
        <p>{(countries[selectedCountry].owner != null) ? teams[countries[selectedCountry].owner].name : "Unowned"}</p>
        <p>Last week: {countries[selectedCountry].recentScore} points</p>
        <br></br>
        <p>Recent headlines:</p>
        {getRecentHeadlines(selectedCountry).map(hl => 
            <p style={{textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden", width: "98%"}}>{"(" + getTimeAgo(hl.timestamp) + ") " + hl.text}</p>
        )}
        <br></br>
        <p>Choose a country to trade for this one:</p>
        <br></br>
        {getCountries(props.login).map(country => 
            <div>
                <input type="radio" id="offeredCountry" name="offeredCountry" value={country} class="offeredCountrySelector"/>
                <label for="offeredCountry">{" " + countries[country].names[0] + " "}
                    <img width="20" src={"http://purecatamphetamine.github.io/country-flag-icons/3x2/" + countries[country].code + ".svg"} style={{border: "1px solid black", boxSizing: "border-box"}}/>
                </label>
            </div>
        )}
        <br></br>
        {(countries[selectedCountry].owner != null) ? 
        <div>
            <p>Offer points (Negative to ask for points)</p>
            <input type="number" step="1" id="pointsOfferedCounter"/> <br></br>
            <input type="button" value="Offer Trade" onClick={()=>{tradeCountry()}}/>
        </div>
        :
        <input type="button" value="Claim" onClick={()=>{tradeCountry()}}/>
        }
        {/*<input type="button" value="Bid"/>*/}
        
    </div>;

    function getCountries(team) {
        let output = [];
        for (let i = 0; i < props.data.countries.length; i++) {
            if (props.data.countries[i].owner === team) {
                output.push(props.data.countries[i]._id);
            }
        }
        output.sort((a, b) => {
            return b.recentScore - a.recentScore;
        });
        return output;
    }

    const leaderBoard = props.data.teams.sort((a, b) => {return b.score - a.score}).map((team, i) => 
        <tr key={i}>
            <td>
                {team.name}
            </td>
            <td>
                {team.score}
            </td>
            {getCountries(team._id).map(c => 
                <td>
                    <img width="20" src={"http://purecatamphetamine.github.io/country-flag-icons/3x2/" + countries[c].code + ".svg"} style={{border: "1px solid black", boxSizing: "border-box"}}/>
                </td>
            )}
        </tr>
    );

    function leftColumn() {
        switch (leftTab) {
            case 0:
                return <table><tbody>{countryList}</tbody></table>
            case 1:
                return <table><tbody>{azList}</tbody></table>
            case 2:
                return <table><tbody>{leaderBoard}</tbody></table>
            case 3:
                return <p>trades</p>
        }
    }

    function hasPendingTrades() {
        for (let i = 0; i < props.data.trades.length; i++) {
            if (props.data.trades[i].status === "pending" && props.data.trades[i].targetTeam === props.login) {
                return true;
            }
        }
        return false;
    }

    return (
        <div>
            <div style={{float: "left", width: "25%", height: "100vh", display: "flex", flexFlow: "column"}}>
                <div>
                    <button style={{border: "none", cursor: "pointer", padding: "10px"}} onClick={()=>{setLeftTab(0)}}>Top Countries</button>
                    <button style={{border: "none", cursor: "pointer", padding: "10px"}} onClick={()=>{setLeftTab(1)}}>A-Z</button>
                    <button style={{border: "none", cursor: "pointer", padding: "10px"}} onClick={()=>{setLeftTab(2)}}>Leaderboard</button>
                    <button style={{border: "none", cursor: "pointer", padding: "10px"}} onClick={()=>{setLeftTab(3)}}>{"Trades" + ((hasPendingTrades()) ? " ❗" : "")}</button>
                </div>
                <div style={{overflow: "auto"}}>
                    {leftColumn()}
                </div>
            </div>
            <div style={{float: "left", width: "45%", overflow: "scroll", height: "100vh"}}>
                {centerList}
            </div>
            <div style={{float: "left", width: "30%", overflow: "scroll", height: "100vh"}}>
                {sideActions}
            </div>
        </div>
    )
  
}

export default App;