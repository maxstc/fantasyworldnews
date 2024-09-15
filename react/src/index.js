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

// function refresh() {
//     fetch("http://" + window.location.hostname + ":41399/data").then((data) => {
//         data.json().then((data) => {
//             root.render(
//                 <React.StrictMode>
//                     <App data={data} login={getLogin()} refresh={refresh}/>
//                 </React.StrictMode>
//             );
//         })
//     });
// }

function refresh() {
    fetch("http://nice-newsletter.gl.at.ply.gg:5905/data").then((data) => {
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