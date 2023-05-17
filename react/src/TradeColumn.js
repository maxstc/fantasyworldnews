import React from 'react';
import './List.css';
import './TradeColumn.css';
import OfferList from './OfferList';

const TradeColumn = (props) => {

    return (
        <div className="list">
            <p className="listHeader">Your Countries</p>
            <p className="centerText">{props.teamName}</p>
            <div>
                <span className="centerText">{props.countries[0].flag} : {props.countries[0].score}</span>
                <span className="centerText">{props.countries[1].flag} : {props.countries[1].score}</span>
            </div>
            <p className="listHeader">Trade Offers</p>
            <OfferList />
        </div>
    );

}

export default TradeColumn;