import React, { useState } from 'react';
import "./TradePopup.css";
import "./TradeColumn.css";

const TradePopup = (props) => {

    const [selectTarget, setSelectTarget] = useState(0);
    const [selectUser, setSelectUser] = useState(0);

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
                    <p className={isSelected(0, false)}>{props.targetTeam.countries[0].flag}</p>
                    <p className={isSelected(1, false)}>{props.targetTeam.countries[1].flag}</p>
                </div>
                <div className="tradeColumn">
                    <p className="centerText">Your Countries</p>
                    <p className={isSelected(0, true)}>{props.userTeam.countries[0].flag}</p>
                    <p className={isSelected(1, true)}>{props.userTeam.countries[1].flag}</p>
                </div>
                <div>
                    <p>confirm</p>
                    <p>cancel</p>
                </div>
            </div>
        </div>
    );
}

export default TradePopup;