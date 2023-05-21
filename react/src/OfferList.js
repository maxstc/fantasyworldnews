import React from 'react';
import './List.css';
import Clickable from './Clickable';

const OfferList = (props) => {

    return (
        <div>
            {
                [...Array(props.trades.length).keys()].filter((tradeId) => {
                    return props.trades[tradeId].proposerTeam === props.userTeam || props.trades[tradeId].targetTeam === props.userTeam;
                }).map((tradeId) => (
                    (props.trades[tradeId].proposerTeam === props.userTeam) ?
                    <div className="row">
                        <Clickable inlineBlock={1} margin={"5px"} clickCallback={()=>{}} inside={<span>❌</span>} />
                        <span>abcd</span>
                    </div>
                    :
                    <div className="row">
                        <Clickable inlineBlock={1} margin={"5px"} clickCallback={()=>{}} inside={<span>✅</span>} />
                        <Clickable inlineBlock={1} margin={"5px"} clickCallback={()=>{}} inside={<span>❌</span>} />
                        <span>abcd</span>
                    </div>
                ))
            }
        </div>
    );

}

export default OfferList;