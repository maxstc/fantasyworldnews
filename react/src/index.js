import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById('root'));

fetch("data").then((data) => {
  data.json().then((data) => {
    root.render(
      <React.StrictMode>
        <App data={data} />
      </React.StrictMode>
    );
  })
});