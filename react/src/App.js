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
  
  function startTrade(teamName) {
    if (teamName != getTeamName()) {
      setTradeTeam(teamName);
      setHidden(false);
    }
  }
  
  function closeTrade() {
    setHidden(true);
  }

  return (
    <div>
      <TeamList startTrade={startTrade} teams={props.data.teams} />
      <CountryList countries={props.data.countries} />
      <TradeColumn teamName={getTeamName()} countries={getTeam(getTeamName(), props.data).countries}/>
      <TradePopup targetTeam={getTeam(tradeTeam, props.data)} userTeam={getTeam(getTeamName(), props.data)} hidden={hidden} closeTrade={closeTrade}/>
    </div>
  )
  
}

export default App;