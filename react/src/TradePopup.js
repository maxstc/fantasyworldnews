import React, { useState } from 'react';
import "./TradePopup.css";
import "./TradeColumn.css";
import Clickable from "./Clickable";

const TradePopup = (props) => {

    const [selectTarget, setSelectTarget] = useState(0);
    const [selectUser, setSelectUser] = useState(0);

    const [hover, setHover] = useState(-1);
    const [click, setClick] = useState(-1);

    function isSelected(id, isTarget) {
        if (isTarget) {
            return (selectTarget === id) ? "selected" : "unselected";
        }
        else {
            return (selectUser === id) ? "selected" : "unselected";
        }
    }

    return (
        <div className="popupBackground">
            <div className="popup">
                <p className="centerText">Trade Offer</p>
                <div className="tradeColumn">
                    <p className="centerText">Their Countries</p>
                    <Clickable clickCallback={()=>{}} inside={
                        <p className="centerText">
                            {props.targetTeam.countries[0].flag}
                        </p>
                    }/>
                    <Clickable clickCallback={()=>{}} inside={
                        <p className="centerText">
                            {props.targetTeam.countries[1].flag}
                        </p>
                    }/>
                </div>
                <div className="tradeColumn">
                    <p className="centerText">Your Countries</p>
                    <Clickable clickCallback={()=>{}} inside={
                        <p className="centerText">
                            {props.userTeam.countries[0].flag}
                        </p>
                    }/>
                    <Clickable clickCallback={()=>{}} inside={
                        <p className="centerText">
                            {props.userTeam.countries[1].flag}
                        </p>
                    }/>
                </div>
                <p className="centerText">Their {props.targetTeam.countries[selectTarget].flag} for your {props.userTeam.countries[selectUser].flag}</p>
                <div className="tradeColumn">
                    <Clickable clickCallback={()=>{}} inside={
                        <p className="centerText">Confirm</p>
                    }/>
                </div>
                <div className="tradeColumn">
                    <Clickable clickCallback={()=>{}} inside={
                        <p className="centerText">Cancel</p>
                    }/>
                </div>
            </div>
        </div>
    );
}

export default TradePopup;