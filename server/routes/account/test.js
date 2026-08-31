// Written by David with much frustration
// run this file from root directory or the .envs get fucked up 
import pool from "../../db.js";

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

console.log("Sign Up Missing Password:")
let resp = await fetch("http://localhost:41399/api/account/signup", {
    method: "POST",
    body: JSON.stringify({ username: "dave", email: "tomapi9511@mapsguy.com" }),
    headers: {
        "Content-Type": "application/json",
    },
});
console.log(await resp.json(), "\n");

console.log("Sign Up Missing Username:")
resp = await fetch("http://localhost:41399/api/account/signup", {
    method: "POST",
    body: JSON.stringify({ password: "123", email: "tomapi9511@mapsguy.com" }),
    headers: {
        "Content-Type": "application/json",
    },
});
console.log(await resp.json(), "\n");


console.log("Sign Up Missing Email:")
resp = await fetch("http://localhost:41399/api/account/signup", {
    method: "POST",
    body: JSON.stringify({ password: "123", username: "boy929" }),
    headers: {
        "Content-Type": "application/json",
    },
});
console.log(await resp.json(), "\n");

console.log("Sign Up Short Password\n", await signup("123456789ab", "user1", "tomapi9511@mapsguy.com"), "\n");
console.log("Sign Up Long Password\n", await signup("123456789123456789123456789123456789123456789123456789123456789123456789",
    "user1", "tomapi9511@mapsguy.com"), "\n");
console.log("Sign Up Invalid Email\n", await signup("123456789abc", "user1", "fuckyou"), "\n");
console.log("Valid Sign Up\n", await signup("123456789abc", "user1", "tomapi9511@mapsguy.com"), "\n");

console.log("Missing Password:")
resp = await fetch("http://localhost:41399/api/account/login", {
    method: "POST",
    body: JSON.stringify({ username: "maxy" }),
    headers: {
        "Content-Type": "application/json",
    },
});
console.log(await resp.json(), "\n");

console.log("Missing Username:")
resp = await fetch("http://localhost:41399/api/account/login", {
    method: "POST",
    body: JSON.stringify({ password: "123" }),
    headers: {
        "Content-Type": "application/json",
    },
});
console.log(await resp.json(), "\n");

const validUsername = "user1";
const validPassword = "123456789abc";

console.log("Log In Long Password", await login("123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789", validUsername), "\n");
console.log("Log In with No Account", await login(validPassword, "cioazevmsqlkjhzlnedxzgnsoy"), "\n");
console.log("Log In Incorrect Password", await login("123456789ABC", validUsername), "\n");
console.log("Valid Log In", await login(validPassword, validUsername), "\n");


// delete user who was created
await pool.query(
    "DELETE FROM accounts WHERE username = $1",
    ["user1"]
);
