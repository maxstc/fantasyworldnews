//Written by Evan
// You will need to change this test for games specific to your DB, 
// make sure the games have players which own a country u want to check
// else it'll just be null
// For myself: in game where gameID: 1, player with player_id 1 has the US.

console.log("Testing /api/dashboard/players...");
console.log("");

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3R1c2VyMSIsImlhdCI6MTc4ODUwODk5OCwiZXhwIjoxNzg4NTEyNTk4fQ.ZtskZjeValjAunVCWKh99NHpQzIl28lxdmgWQ1P6-mM";


const response = await fetch(
    "http://localhost:41399/api/info/country",
    {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({
            gameID: "2",
            countryCode: "US"
        })
    }
);

console.log("Status:", response.status);

const body = await response.text();

console.log("Response:", body);