import React from 'react';
import Country from './Country.js';
import './List.css';

const CountryList = (props) => {

    return (
        <div className="list">
            <p className="listHeader">Countries</p>
            {
                props.countries.sort((a, b) => {
                    return b.score - a.score;
                }).map((country) => (
                    <Country countryFlag={country.flag} countryName={country.name[0]} countryScore={country.score} />
                ))
            }
        </div>
    );

}

export default CountryList;