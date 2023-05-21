import React from 'react';
import './List.css';
import Clickable from './Clickable';

const OfferList = (props) => {

    return (
        <div>
            {
                props.trades.map((trade) => (
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