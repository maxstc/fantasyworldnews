import React, { useState } from 'react';
import "./TradePopup.css";
import "./TradeColumn.css";
import Clickable from "./Clickable";

const TradePopup = (props) => {

    const [selectTarget, setSelectTarget] = useState(0);
    const [selectUser, setSelectUser] = useState(0);

    const hiddenStyle = {
        display: props.hidden ? "none" : "initial"
    }

    function sendProposal(a, b, c) {
        console.log(a);
        console.log(b);
        console.log(c);
    }

    return (
        <div className="popupBackground" style={hiddenStyle}>
            <div className="popup">
                <p className="centerText">Trade Offer</p>
                <div className="tradeColumn">
                    <p className="centerText">Their Countries</p>
                    <Clickable clickCallback={()=>{setSelectTarget(0)}} inside={
                        <p className="centerText">
                            {props.targetTeam.countries[0].flag} {props.targetTeam.countries[0].name}
                        </p>
                    }/>
                    <Clickable clickCallback={()=>{setSelectTarget(1)}} inside={
                        <p className="centerText">
                            {props.targetTeam.countries[1].flag} {props.targetTeam.countries[1].name}
                        </p>
                    }/>
                </div>
                <div className="tradeColumn">
                    <p className="centerText">Your Countries</p>
                    <Clickable clickCallback={()=>{setSelectUser(0)}} inside={
                        <p className="centerText">
                            {props.userTeam.countries[0].flag} {props.userTeam.countries[0].name}
                        </p>
                    }/>
                    <Clickable clickCallback={()=>{setSelectUser(1)}} inside={
                        <p className="centerText">
                            {props.userTeam.countries[1].flag} {props.userTeam.countries[1].name}
                        </p>
                    }/>
                </div>
                <p className="centerText">Their {props.targetTeam.countries[selectTarget].flag} {props.targetTeam.countries[selectTarget].name} for your {props.userTeam.countries[selectUser].flag} {props.userTeam.countries[selectUser].name}</p>
                <div className="tradeColumn">
                    <Clickable clickCallback={()=>{sendProposal(props.userTeam, selectTarget, selectUser);props.closeTrade()}} inside={
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