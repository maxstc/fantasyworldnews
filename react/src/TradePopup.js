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
                    <Clickable clickCallback={()=>{setSelectTarget(props.teams[props.targetTeam].countries[0])}} inside={
                        <p className="centerText">
                            {props.teams[props.targetTeam].countries[0].flag} {props.teams[props.targetTeam].countries[0].name}
                        </p>
                    }/>
                    <Clickable clickCallback={()=>{setSelectTarget(props.teams[props.targetTeam].countries[1])}} inside={
                        <p className="centerText">
                            {props.teams[props.targetTeam].countries[1].flag} {props.teams[props.targetTeam].countries[1].name}
                        </p>
                    }/>
                </div>
                <div className="tradeColumn">
                    <p className="centerText">Your Countries</p>
                    <Clickable clickCallback={()=>{setSelectUser(props.teams[props.userTeam].countries[0])}} inside={
                        <p className="centerText">
                            {props.teams[props.userTeam].countries[0].flag} {props.teams[props.userTeam].countries[0].name}
                        </p>
                    }/>
                    <Clickable clickCallback={()=>{setSelectUser(props.teams[props.userTeam].countries[1])}} inside={
                        <p className="centerText">
                            {props.teams[props.userTeam].countries[1].flag} {props.teams[props.userTeam].countries[1].name}
                        </p>
                    }/>
                </div>
                <p className="centerText">Their {props.teams[props.targetTeam].countries[selectTarget].flag} {props.teams[props.targetTeam].countries[selectTarget].name} for your {props.teams[props.userTeam].countries[selectUser].flag} {props.teams[props.userTeam].countries[selectUser].name}</p>
                <div className="tradeColumn">
                    <Clickable clickCallback={()=>{sendProposal(props.userTeam, props.targetTeam, selectUser, selectTarget);props.closeTrade()}} inside={
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