import React, { useState } from 'react';
import './App.css';

const App = (props) => {
    let countries = {};
    let teams = {};

    let selectedCountry = React.useState("");

    for (let i = 0; i < props.data.teams.length; i++) {
        teams[props.data.teams[i]._id] = props.data.teams[i];
    }

    for (let i = 0; i < props.data.countries.length; i++) {
        countries[props.data.countries[i]._id] = props.data.countries[i];
        countries[props.data.countries[i]._id].recentScore = 0;
    }

    let headlines = [];
    for (let i = 0; i < props.data.headlines.length; i++) {
        if (props.data.headlines[i].timestamp - Date.now() < 1000*60*60*24*2 && props.data.headlines[i].mentionedCountries.length > 0) {
            headlines.push(props.data.headlines[i]);
        }
    }
    headlines.sort((a, b) => {return b.timestamp - a.timestamp});
    for (let i = 0; i < headlines.length; i++) {
        for (let j = 0; j < headlines[i].mentionedCountries.length; j++) {
            console.log(countries[headlines[i].mentionedCountries[j].country].names[0])
            console.log(countries[headlines[i].mentionedCountries[j].country].recentScore)
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

    let displayedCountries = Object.keys(countries).map((key) => {return countries[key]}).sort((a,b) => {return b.recentScore - a.recentScore});

    const countryList = displayedCountries.map(country => 
        <tr>
            <td
            style={{cursor: "pointer"}} 
            onClick={()=>{alert("hello")}}
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
        return Math.floor(seconds) + " s";
    }

    const centerList = log.map(l => 
        <p style={{textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden", width: "98%"}}>
            {(l.status === undefined) ?
            "📰 (" + getTimeAgo(l.timestamp) + ") " + l.text
            :
            ((l.status === "bidsuccess") ?
            "🤝 (" + getTimeAgo(l.timestamp) + ") "
            :
            "💸 (" + getTimeAgo(l.timestamp) + ") "
            )}
        </p>
    );

    const sideActions = <p>hi</p>

    return (
        <div>
            <div style={{float: "left", width: "25%", overflow: "scroll", height: "100vh"}}>
                <table>
                    {countryList}
                </table>
            </div>
            <div style={{float: "left", width: "45%", overflow: "scroll", height: "100vh"}}>
                {centerList}
            </div>
            <div style={{float: "left", width: "30%", overflow: "scroll", height: "100vh"}}>
                <table>
                    {sideActions}
                </table>
            </div>
        </div>
    )
  
}

export default App;