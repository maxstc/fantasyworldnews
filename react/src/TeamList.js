import React from 'react';
import Team from './Team';
import './List.css';

const TeamList = (props) => {

    return (
        <div className="list">
            <p className="listHeader">Teams</p>
            {
                props.teams.sort((a, b) => {
                    return b.score - a.score;
                }).map((team) => (
                    <Team teamName={team.name} teamScore={team.score} teamCountries={team.countries} />
                ))
            }
        </div>
    );

}

export default TeamList;