import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById('root'));

function getLogin() {
    let cookies = document.cookie.split("; ");
    for (let i = 0; i < cookies.length; i++) {
        let currentCookie = cookies[i].split("=");
        if (currentCookie[0] === "login") {
            return currentCookie[1];
        }
    }
    return "0";
}

function getUrl() {
    if (window.location.port === "") {
        return "http://" + window.location.hostname;
    }
    else if (window.location.port === "3000") {
        return "http://" + window.location.hostname + ":41399";
    }
    else {
        return "http://" + window.location.hostname + ":" + window.location.port;
    }
}

function refresh() {
    fetch(getUrl() + "/data").then((data) => {
        data.json().then((data) => {
            root.render(
                <React.StrictMode>
                    <App data={data} login={getLogin()} refresh={refresh} getUrl={getUrl}/>
                </React.StrictMode>
            );
        })
    });
}

refresh();

setInterval(refresh, 3000);