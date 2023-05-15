import React from 'react';
import Team from './Team';
import './List.css';

let tc = [
    {
        flag: "🇦🇹",
        score: 10
    },
    {
        flag: "🇨🇳",
        score: 62
    }
];  

let teams = [
    {
        name: "team1",
        score: 10,
        teamCountries: tc
    },
    {
        name: "team2",
        score: 20,
        teamCountries: tc
    }
];

const TeamList = () => {

    return (
        <div className="list">
            <p className="listHeader">Teams</p>
            {
                teams.map((team) => (
                    <Team teamName={team.name} teamScore={team.score} teamCountries={team.teamCountries} />
                ))
            }
        </div>
    );

}

export default TeamList;