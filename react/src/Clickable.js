import React, { useState } from 'react';

const Clickable = (props) => {

    const [hover, setHover] = useState(false);
    const [click, setClick] = useState(false);

    const sectionStyle = {
        margin: (props.margin === undefined) ? "5px 30px" : props.margin,
        "border-radius": "5px",
        border: hover ? "3px solid lightgray" : "1px solid lightgray",
        padding: hover ? "3px" : "5px",
        background: click ? "lightgray" : "white",
        display: (props.inlineBlock === 1) ? "inline-block" : ""
    }

    function processClick(c) {
        if (c===true) {
            props.clickCallback();
        }
    }

    return (
        <div style={sectionStyle}
            onMouseEnter={()=>{setHover(true)}}
            onMouseLeave={()=>{setHover(false);setClick(false)}}
            onMouseDown={()=>{setClick(true)}}
            onMouseUp={()=>{processClick(click);setClick(false)}}>
                {props.inside}
        </div>
    );

}

export default Clickable;