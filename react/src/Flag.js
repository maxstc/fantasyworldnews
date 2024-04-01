import React, { useState } from 'react';

const Flag = (props) => {

    const flagStyle = {
      border: "1px solid black"
    }

    return (
      <img width={props.flagWidth} style={flagStyle} src={"http://purecatamphetamine.github.io/country-flag-icons/3x2/" + props.countrycode + ".svg"}/>
    );

}

export default Flag;