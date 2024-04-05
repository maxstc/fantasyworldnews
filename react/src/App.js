import React, { useState } from 'react';
import CountryList from "./CountryList"
import './App.css';

const App = (props) => {
    let countries = {};

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

    let displayedCountries = Object.keys(countries).map((key) => {return countries[key]}).sort((a,b) => {return b.recentScore - a.recentScore});

    const countryList = displayedCountries.map(country => 
        <p>{country.names[0]} ({country.recentScore})</p>
    );

    return (
        <div>
            {countryList}
        </div>
    )
  
}

export default App;