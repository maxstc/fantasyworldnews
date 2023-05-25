import React, { useState } from 'react';
import "./TradePopup.css";
import "./TradeColumn.css";
import Clickable from "./Clickable";
import postData from "./postData";

const TradePopup = (props) => {

    const [selectTarget, setSelectTarget] = React.useState(0);
    const [selectUser, setSelectUser] = React.useState(0);

    const hiddenStyle = {
        display: props.hidden ? "none" : "initial"
    }

    function sendProposal(userTeam, targetTeam, userCountry, targetCountry) {
        postData("/trade", {
            proposerTeam: userTeam,
            targetTeam: targetTeam,
            proposerCountry: userCountry,
            targetCountry: targetCountry
        }).then(() => {
            props.refresh();
        });
    }

    React.useEffect(() => {
        setSelectTarget(props.targetCountry);
    }, [props.targetCountry]);

    React.useEffect(() => {
        setSelectUser(props.userCountry);
    }, [props.userCountry]);

    return (
        <div className="popupBackground" style={hiddenStyle}>
            <div className="popup">
                <p className="centerText">Trade Offer</p>
                <div className="tradeColumn">
                    {(props.targetTeam === -1) ?
                    <div>
                        <p className="centerText">Claimed Country</p>
                        <Clickable clickCallback={()=>{}} inside={
                            <p className="centerText">
                                {props.countries[selectTarget].flag} {props.countries[selectTarget].name[0]}
                            </p>
                        }/>
                    </div>
                    :
                    <div>
                        <p className="centerText">Their Countries</p>
                        <Clickable clickCallback={()=>{setSelectTarget(props.teams[props.targetTeam].countries[0])}} inside={
                            <p className="centerText">
                                {props.countries[props.teams[props.targetTeam].countries[0]].flag} {props.countries[props.teams[props.targetTeam].countries[0]].name[0]}
                            </p>
                        }/>
                        <Clickable clickCallback={()=>{setSelectTarget(props.teams[props.targetTeam].countries[1])}} inside={
                            <p className="centerText">
                                {props.countries[props.teams[props.targetTeam].countries[1]].flag} {props.countries[props.teams[props.targetTeam].countries[1]].name[0]}
                            </p>
                        }/>
                    </div>
                    }
                    
                </div>
                <div className="tradeColumn">
                    <p className="centerText">Your Countries</p>
                    <Clickable clickCallback={()=>{setSelectUser(props.teams[props.userTeam].countries[0])}} inside={
                        <p className="centerText">
                            {props.countries[props.teams[props.userTeam].countries[0]].flag} {props.countries[props.teams[props.userTeam].countries[0]].name[0]}
                        </p>
                    }/>
                    <Clickable clickCallback={()=>{setSelectUser(props.teams[props.userTeam].countries[1])}} inside={
                        <p className="centerText">
                            {props.countries[props.teams[props.userTeam].countries[1]].flag} {props.countries[props.teams[props.userTeam].countries[1]].name[0]}
                        </p>
                    }/>
                </div>
                <p className="centerText">Gain {props.countries[selectTarget].flag} {props.countries[selectTarget].name[0]} for your {props.countries[selectUser].flag} {props.countries[selectUser].name[0]}</p>
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