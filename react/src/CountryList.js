import React from 'react';
import Country from './Country.js';
import './List.css';

const countries = [
    {
        flag: "🇦🇹",
        name: ["Austria"],
        score: 10
    },
    {
        flag: "🇨🇳",
        name: ["China"],
        score: 5
    },
    {
        flag: "A",
        name: ["Test"],
        score: 1
    }
];

const CountryList = () => {

    return (
        <div className="list">
            <p className="listHeader">Countries</p>
            {
                countries.map((country) => (
                    <Country countryFlag={country.flag} countryName={country.name[0]} countryScore={country.score} />
                ))
            }
        </div>
    );

}

export default CountryList;