import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import TeamList from "./TeamList";
import CountryList from "./CountryList";
import TradeColumn from "./TradeColumn";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TeamList />
    <CountryList />
    <TradeColumn />
  </React.StrictMode>
);