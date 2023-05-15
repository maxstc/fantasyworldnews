import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import TeamList from "./TeamList";
import CountryList from "./CountryList";
import TradeColumn from "./TradeColumn";

const root = ReactDOM.createRoot(document.getElementById('root'));

let countries;
let teams;

fetch("data").then((data) => {
  data.json().then((data) => {
    root.render(
      <React.StrictMode>
        <TeamList teams={data.teams} />
        <CountryList countries={data.countries} />
        <TradeColumn />
      </React.StrictMode>
    );
  })
});