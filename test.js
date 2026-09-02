// Written by David with much frustration
// run this file from root directory or the .envs get fucked up 
import pool from "#root/server/db.js";

async function signup(requestPassword, requestUsername, requestEmail) {
    const response = await fetch("http://localhost:41399/api/account/signup", {
        method: "POST",
        body: JSON.stringify({ password: requestPassword, username: requestUsername, email: requestEmail }),
        headers: {
            "Content-Type": "application/json",
        },
    });
    return (await response.json());
}
async function login(requestPassword, requestUsername) {
    const response = await fetch("http://localhost:41399/api/account/login", {
        method: "POST",
        body: JSON.stringify({ password: requestPassword, username: requestUsername }),
        headers: {
            "Content-Type": "application/json",
        },
    });
    return (await response.json());
}

async function country(requestGameID, requestCountryID, token) {
    const response = await fetch("http://localhost:41399/api/info/country", {
        method: "POST",
        body: JSON.stringify({ gameID: requestGameID, countryID: requestCountryID }),
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
    });
    return (await response.json());
}
async function player(requestGameID, requestPlayerID, token) {
    const response = await fetch("http://localhost:41399/api/info/player", {
        method: "POST",
        body: JSON.stringify({ gameID: requestGameID, playerID: requestPlayerID }),
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
    });
    return (await response.json());
}


const validUsername = "user1";
const validPassword = "123456789abc";
const validEmail = "tomapi9511@mapsguy.com";
const validGameID = "1";
const validPlayerID = "2";

// console.log("Signing Up\n", await signup(validPassword, validUsername, validEmail), "\n");
const loginResponse = await login(validPassword, validUsername)
console.log("Logging In\n", loginResponse, "\n");
const token = loginResponse.token;
console.log("Getting Player Info\n", await player(validGameID, validPlayerID, token), "\n");


// delete user who was created
// console.log("Deleting temporary user", "\n");
// await pool.query(
//     "DELETE FROM accounts WHERE username = $1",
//     ["user1"]
// );
