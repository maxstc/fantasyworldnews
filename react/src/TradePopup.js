import React, { useState } from 'react';
import "./TradePopup.css";
import "./TradeColumn.css";
import Clickable from "./Clickable";
import postData from "./postData";

const TradePopup = (props) => {

    const [selectTarget, setSelectTarget] = useState(0);
    const [selectUser, setSelectUser] = useState(0);

    const hiddenStyle = {
        display: props.hidden ? "none" : "initial"
    }

    function sendProposal(userTeam, targetTeam, userCountry, targetCountry) {
        postData("/trade", {
            proposerTeam: userTeam,
            targetTeam: targetTeam,
            proposerCountry: userCountry,
            targetCountry: targetCountry
        });
    }

    return (
        <div className="popupBackground" style={hiddenStyle}>
            <div className="popup">
                <p className="centerText">Trade Offer</p>
                <div className="tradeColumn">
                    <p className="centerText">Their Countries</p>
                    <Clickable clickCallback={()=>{setSelectTarget(0)}} inside={
                        <p className="centerText">
                            {props.countries[props.teams[props.targetTeam].countries[0]].flag} {props.countries[props.teams[props.targetTeam].countries[0]].name[0]}
                        </p>
                    }/>
                    <Clickable clickCallback={()=>{setSelectTarget(1)}} inside={
                        <p className="centerText">
                            {props.countries[props.teams[props.targetTeam].countries[1]].flag} {props.countries[props.teams[props.targetTeam].countries[1]].name[0]}
                        </p>
                    }/>
                </div>
                <div className="tradeColumn">
                    <p className="centerText">Your Countries</p>
                    <Clickable clickCallback={()=>{setSelectUser(0)}} inside={
                        <p className="centerText">
                            {props.countries[props.teams[props.userTeam].countries[0]].flag} {props.countries[props.teams[props.userTeam].countries[0]].name[0]}
                        </p>
                    }/>
                    <Clickable clickCallback={()=>{setSelectUser(1)}} inside={
                        <p className="centerText">
                            {props.countries[props.teams[props.userTeam].countries[1]].flag} {props.countries[props.teams[props.userTeam].countries[1]].name[0]}
                        </p>
                    }/>
                </div>
                <p className="centerText">Their {props.countries[props.teams[props.targetTeam].countries[selectTarget]].flag} {props.countries[props.teams[props.targetTeam].countries[selectTarget]].name[0]} for your {props.countries[props.teams[props.userTeam].countries[selectUser]].flag} {props.countries[props.teams[props.userTeam].countries[selectUser]].name[0]}</p>
                <div className="tradeColumn">
                    <Clickable clickCallback={()=>{sendProposal(props.userTeam, props.targetTeam, props.teams[props.userTeam].countries[selectUser], props.teams[props.targetTeam].countries[selectTarget]);props.closeTrade()}} inside={
                        <p className="centerText">Confirm</p>
                    }/>
                </div>
                <div className="tradeColumn">
                    <Clickable clickCallback={()=>{props.closeTrade()}} inside={
                        <p className="centerText">Cancel</p>
                    }/>
                </div>
            </div>
        </div>
    );
}

export default TradePopup;