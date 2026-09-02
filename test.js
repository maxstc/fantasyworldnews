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
    })
    return (await response.json())
}
async function login(requestPassword, requestUsername) {
    const response = await fetch("http://localhost:41399/api/account/login", {
        method: "POST",
        body: JSON.stringify({ password: requestPassword, username: requestUsername }),
        headers: {
            "Content-Type": "application/json",
        },
    })
    return (await response.json())
}


const validUsername = "user1";
const validPassword = "123456789abc";
const validEmail = "tomapi9511@mapsguy.com";
console.log("Signing Up\n", await signup(validPassword, validUsername, validEmail), "\n");
console.log("Logging In", await login(validPassword, validUsername), "\n");


// delete user who was created
console.log("Deleting temporary user", "\n");
await pool.query(
    "DELETE FROM accounts WHERE username = $1",
    ["user1"]
);
