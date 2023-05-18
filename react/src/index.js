import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import TeamList from "./TeamList";
import CountryList from "./CountryList";
import TradeColumn from "./TradeColumn";
import TradePopup from "./TradePopup";

const root = ReactDOM.createRoot(document.getElementById('root'));

let countries;
let teams;

function getTeamName(cookies) {
  let cs = cookies.split(";");
  for (let i = 0; i < cs.length; i++) {
    let c = cs[i];

    while(c.charAt(0) == " ") {
      c = c.substring(1);
    }

    if (c.indexOf("teamName") == 0) {
      return (c.substring("teamName".length + 1, c.length));
    }
  }
  return undefined;
}

function getTeam(teamName, data) {
  console.log(data.teams);
  console.log(teamName);
  for (let i = 0; i < data.teams.length; i++) {
    if (data.teams[i].name === teamName) {
      return data.teams[i];
    }
  }
  return undefined;
}

fetch("data").then((data) => {
  data.json().then((data) => {
    root.render(
      <React.StrictMode>
        <TeamList teams={data.teams} />
        <CountryList countries={data.countries} />
        <TradeColumn teamName={getTeamName(document.cookie)} countries={getTeam(getTeamName(document.cookie), data).countries}/>
        <TradePopup targetTeam={getTeam("team1", data)} userTeam={getTeam(getTeamName(document.cookie), data)}/>
      </React.StrictMode>
    );
  })
});