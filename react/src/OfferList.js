import React from 'react';
import './List.css';
import Clickable from './Clickable';
import postData from "./postData";

const OfferList = (props) => {

    //team
    //tradeId
    //timestamp

    function declineOffer(tradeId) {
        postData("/declinetrade", {
            team: props.userTeam,
            tradeId: tradeId,
            timestamp: props.trades[tradeId].timestamp
        });
    }
    function acceptOffer(tradeId) {
        postData("/accepttrade", {
            team: props.userTeam,
            tradeId: tradeId,
            timestamp: props.trades[tradeId].timestamp
        });
    }

    return (
        <div>
            {
                [...Array(props.trades.length).keys()].filter((tradeId) => {
                    return props.trades[tradeId].proposerTeam === props.userTeam || props.trades[tradeId].targetTeam === props.userTeam;
                }).map((tradeId) => (
                    (props.trades[tradeId].proposerTeam === props.userTeam) ?
                    <div className="row">
                        <Clickable inlineBlock={1} margin={"5px"} clickCallback={()=>{declineOffer(tradeId)}} inside={<span>❌</span>} />
                        <span>{props.countries[props.trades[tradeId].proposerCountry].flag} {props.countries[props.trades[tradeId].proposerCountry].name[0]} for {props.countries[props.trades[tradeId].targetCountry].flag} {props.countries[props.trades[tradeId].targetCountry].name[0]}</span>
                    </div>
                    :
                    <div className="row">
                        <Clickable inlineBlock={1} margin={"5px"} clickCallback={()=>{acceptOffer(tradeId)}} inside={<span>✅</span>} />
                        <Clickable inlineBlock={1} margin={"5px"} clickCallback={()=>{declineOffer(tradeId)}} inside={<span>❌</span>} />
                        <span>{props.countries[props.trades[tradeId].proposerCountry].flag} {props.countries[props.trades[tradeId].proposerCountry].name[0]} for {props.countries[props.trades[tradeId].targetCountry].flag} {props.countries[props.trades[tradeId].targetCountry].name[0]}</span>
                    </div>
                ))
            }
        </div>
    );

}

export default OfferList;