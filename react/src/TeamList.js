import React from 'react';
import Clickable from './Clickable';
import './List.css';

const TeamList = (props) => {
    function startTrade(teamName) {
        props.startTrade(teamName)
    }

    return (
        <div className="list">
            <p className="listHeader">Teams</p>
            {
                props.teams.sort((a, b) => {
                    return b.score - a.score;
                }).map((team) => (
                    <Clickable clickCallback={()=>{startTrade(team.name)}} inside={
                        <div>
                            <span className="name">{team.name}</span>
                            <span className="score">{team.score}</span>
                            {
                                team.countries.map((country) => (
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