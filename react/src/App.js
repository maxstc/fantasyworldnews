import React, { useState } from 'react';
import './App.css';
import TeamList from "./TeamList";
import CountryList from "./CountryList";
import TradeColumn from "./TradeColumn";
import TradePopup from "./TradePopup";

const App = (props) => {
  console.log(props.data);
  
  const [hidden, setHidden] = React.useState(true);
  const [tradeTeam, setTradeTeam] = React.useState(props.data.teams[0].name);  

  function getTeamName() {
    let cs = document.cookie.split(";");
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
    for (let i = 0; i < data.teams.length; i++) {
      if (data.teams[i].name === teamName) {
        return i;
      }
    }
    return undefined;
  }

  let userTeam = getTeam(getTeamName(), props.data);
  
  function startTrade(team, country) {
    if (team != userTeam()) {
      setTradeTeam(team);
      setHidden(false);
    }
  }
  
  function closeTrade() {
    setHidden(true);
  }

  return (
    <div>
      <TeamList startTrade={startTrade} teams={props.data.teams} />
      <CountryList countries={props.data.countries} teams={props.data.teams} startTrade={startTrade} />
      <TradeColumn team={userTeam} teams={props.data.teams} countries={props.data.countries} trades={props.data.trades} />
      <TradePopup targetTeam={tradeTeam} userTeam={userTeam} hidden={hidden} closeTrade={closeTrade} teams={props.data.teams} countries={props.data.countries} />
    </div>
  )
  
}

export default App;