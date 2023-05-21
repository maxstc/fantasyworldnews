import React from 'react';
import Clickable from './Clickable';
import './List.css';

const CountryList = (props) => {

    function startTrade(countryId) {
        for (let i = 0; i < props.teams.length; i++) {
            if (props.teams[i].countries.includes(countryId)) {
                props.startTrade(i, countryId);
                return;
            }
        }
        props.startTrade(-1, countryId);
    }

    return (
        <div className="list">
            <p className="listHeader">Countries</p>
            {
                [...Array(props.countries.length).keys()].sort((a, b) => {
                    return props.countries[b].score - props.countries[a].score;
                }).map((countryId) => (
                    <Clickable clickCallback={()=>{startTrade(countryId)}} inside={
                        <div>
                            <span className="flag">{props.countries[countryId].flag}</span>
                            <span className="name">{props.countries[countryId].name[0]}</span>
                            <span className="score">{props.countries[countryId].score}</span>
                        </div>
                    }/>
                ))
            }
        </div>
    );

}

export default CountryList;