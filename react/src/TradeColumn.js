import React from 'react';
import './List.css';
import './TradeColumn.css';
import OfferList from './OfferList';

const TradeColumn = (props) => {

    return (
        <div className="list">
            <p className="listHeader">Your Countries</p>
            {
                (props.team === undefined) ?
                    <p className="centerText">You are not logged in</p> 
                    :
                    <p className="centerText">{props.teams[props.team].name}</p>
            }
            {
                (props.countries === undefined) ?
                    <p className="centerText">Your team doesn't exist</p>
                    :
                    <div>
                        <span className="centerText">{props.countries[props.teams[props.team].countries[0]].flag} : {props.countries[props.teams[props.team].countries[0]].score}</span>
                        <span className="centerText">{props.countries[props.teams[props.team].countries[1]].flag} : {props.countries[props.teams[props.team].countries[1]].score}</span>
                    </div>
            }
            <p className="listHeader">Trade Offers</p>
            <OfferList />
        </div>
    );

}

export default TradeColumn;