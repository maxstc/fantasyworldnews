import React from 'react';
import Clickable from './Clickable';
import './List.css';

const TeamList = (props) => {
    function startTrade(team) {
        props.startTrade(team, props.teams[team].countries[0]);
    }

    return (
        <div className="list">
            <p className="listHeader">Teams</p>
            {
                [...Array(props.teams.length).keys()].sort((a, b) => {
                    return props.teams[b].score - props.teams[a].score;
                }).map((teamId) => (
                    <Clickable clickCallback={()=>{startTrade(teamId)}} inside={
                        <div>
                            <span className="name">{props.teams[teamId].name}</span>
                            <span className="score">{props.teams[teamId].score}</span>
                            {
                                props.teams[teamId].countries.map((country) => (
                                    <span>
                                        <span className="country">{country.flag}</span>
                                        <span className="name">{country.name}</span>
                                        <span className="score">{country.score}</span>
                                    </span>
                                ))
                            }
                        </div>
                    }/>
                ))
            }
        </div>
    );

}

export default TeamList;