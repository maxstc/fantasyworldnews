//import countryfrom "#root/server/db.js";


const response = await fetch("http://localhost:41399/api/info/country", {
    method: "POST",
    
    headers: {
        "Content-Type": "application/json",
    },

    body: JSON.stringify({
        gameID: "123456",
        countryCode: "USA"
    })
});

console.log("Status:", response.status);

const body = await response.text();
console.log("Response:", body);