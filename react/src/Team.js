import React, { useState } from 'react';
import './Row.css'
import './Team.css';

const Team = (props) => {

    const [hover, setHover] = useState(false);
    const [click, setClick] = useState(false);

    const sectionStyle = {
        border: hover ? "3px solid lightgray" : "1px solid lightgray",
        padding: hover ? "3px" : "5px",
        background: click ? "lightgray" : "white"
    }

    function processClick(c) {
        if (c===true) {
            console.log("You clicked an element!");
        }
    }

    return (
        <div style={sectionStyle} className="row" 
            onMouseEnter={()=>{setHover(true)}}
            onMouseLeave={()=>{setHover(false);setClick(false)}}
            onMouseDown={()=>{setClick(true)}}
            onMouseUp={()=>{processClick(click);setClick(false)}}>
            <span className="name">{props.teamName}</span>
            <span className="score">{props.teamScore}</span>
            {
                props.teamCountries.map((country) => (
                    <span>
                        <span className="country">{country.flag}</span>
                        <span className="score">{country.score}</span>
                    </span>
                ))
            }
        </div>
    );

}

export default Team;