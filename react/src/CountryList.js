import React from 'react';
import Clickable from './Clickable';
import './List.css';

const CountryList = (props) => {

    return (
        <div className="list">
            <p className="listHeader">Countries</p>
            {
                props.countries.sort((a, b) => {
                    return b.score - a.score;
                }).map((country) => (
                    <Clickable clickCallback={()=>{}} inside={
                        <div>
                            <span className="flag">{country.flag}</span>
                            <span className="name">{country.name[0]}</span>
                            <span className="score">{country.score}</span>
                        </div>
                    }/>
                ))
            }
        </div>
    );

}

export default CountryList;