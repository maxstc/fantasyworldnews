import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById('root'));

function getLogin() {
    console.log("hi" + document.cookie)
}

function refresh() {
  fetch("http://" + window.location.hostname + ":41399/data").then((data) => {
    data.json().then((data) => {
      root.render(
        <React.StrictMode>
          <App data={data} login={getLogin()} refresh={refresh}/>
        </React.StrictMode>
      );
    })
  });
}

refresh();

setInterval(refresh, 3000);