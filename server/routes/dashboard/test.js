// Written by David with much frustration
// run this file from root directory or the .envs get fucked up 
import pool from "../../db.js";

const url = "http://localhost:41399/api/dashboard/headlines"

async function headlines(requestLastHeadline, requestNumHeadlines) {
    const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify({ lastHeadline: requestLastHeadline, numHeadlines: requestNumHeadlines }),
        headers: {
            "Content-Type": "application/json",
        },
    })
    return (await response.json())
}

console.log("Headlines Missing lastHeadline")
let resp = await fetch(url, {
    method: "POST",
    body: JSON.stringify({numHeadlines: 1}),
    headers: {
        "Content-Type": "application/json",
    },
});
console.log(await resp.json(), "\n");

console.log("Headlines Missing numHeadlines")
resp = await fetch(url, {
    method: "POST",
    body: JSON.stringify({lastHeadline: 4}),
    headers: {
        "Content-Type": "application/json",
    },
});
console.log(await resp.json(), "\n");

for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
    console.log(`\nRequesting Headlines with requestLastHeadline = ${i}
        and requestNumHeadlines = ${j}`, await headlines(i, j), "\n");
    }
}
