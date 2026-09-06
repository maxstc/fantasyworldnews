//Written by Max unfortunately
//console.log("\x1b[32m✓ Test passed\x1b[0m");
//console.log("\x1b[31m✗ Test failed\x1b[0m");

import pool from "#root/server/db.js";

async function p(url, token, body) {
    return await (
        await fetch("http://localhost:41399/" + url, {
            method: "POST",
            headers: { 
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token
             },
            body: JSON.stringify(body)
        })
    ).json();
}

try {
    //create some test accounts to work with
    const t1 = (await p("api/account/signup", "", {username: "test_game_1", password: "test1234567890", email: "test1@test.com"})).token;
    const t2 = (await p("api/account/signup", "", {username: "test_game_2", password: "test1234567890", email: "test2@test.com"})).token;
    const accountID2 = (await pool.query("SELECT * FROM accounts WHERE username = $1", ["test_game_2"])).rows[0].id;
    const t3 = (await p("api/account/signup", "", {username: "test_game_3", password: "test1234567890", email: "test3@test.com"})).token;
    const accountID3 = (await pool.query("SELECT * FROM accounts WHERE username = $1", ["test_game_3"])).rows[0].id;

    //create a game
    process.stdout.write("Create game:    ");
    const gameID = (await p("api/game/create", t1, {})).gameID;
    console.log("\x1b[32m✓\x1b[0m");

    //invite a player
    process.stdout.write("Invite player:  ");
    const inviteID2 = (await p("api/game/invite", t1, {gameID: gameID, recipientAccountID: accountID2})).inviteID;
    const checkInviteID2 = await pool.query("SELECT * FROM game_invites WHERE id = $1", [inviteID2]);
    if (checkInviteID2.rowCount > 0) {
        console.log("\x1b[32m✓\x1b[0m");
    }
    else {
        console.log("\x1b[31m✗\x1b[0m");
    }

    //accept
    process.stdout.write("Accept invite:  ");
    await p("api/game/accept", t2, {inviteID: inviteID2});
    const checkAcceptInviteID2 = (await pool.query("SELECT * FROM game_invites WHERE id = $1", [inviteID2])).rows[0].status;
    if (checkAcceptInviteID2 === "accepted") {
        const checkAcceptInviteID2Game = await pool.query("SELECT * FROM players WHERE game_id = $1 AND account_id = $2", [gameID, accountID2]);
        if (checkAcceptInviteID2Game.rowCount > 0) {
            console.log("\x1b[32m✓\x1b[0m");
        }
        else {
            console.log("\x1b[31m✗\x1b[0m");
        }
    }
    else {
        console.log("\x1b[31m✗\x1b[0m");
    }

    //decline
    process.stdout.write("Decline invite: ");
    const inviteID3 = (await p("api/game/invite", t1, {gameID: gameID, recipientAccountID: accountID3})).inviteID;
    await p("api/game/decline", t3, {inviteID: inviteID2});
    const checkAcceptInviteID3 = (await pool.query("SELECT * FROM game_invites WHERE id = $1", [inviteID3])).rows[0].status;
    if (checkAcceptInviteID3 === "declined") {
        console.log("\x1b[32m✓\x1b[0m");
    }
    else {
        console.log("\x1b[31m✗\x1b[0m");
    }

    //getGames
    process.stdout.write("Get games:      ");
    const getGames = (await p("/api/game/get-games", t1, {})).gameIDs;
    if (getGames.length != 1) {
        console.log("\x1b[31m✗\x1b[0m");
    }
    else {
        if (getGames[0] != gameID) {
            console.log("\x1b[31m✗\x1b[0m");
        }
        else {
            console.log("\x1b[32m✓\x1b[0m");
        }
    }

    //getInvites
    process.stdout.write("Get invites:    ");
    const sentInviteFromT2 = (await p("/api/game/invite", t2, {gameID: gameID, recipientAccountID: accountID3})).inviteID;
    const checkGetInvites = await p("api/game/get-invites", t2, {}).rows;
    if (checkGetInvites[0] != sentInviteFromT2 && checkGetInvites[1] != sentInviteFromT2) {
        console.log("\x1b[31m✗\x1b[0m");
    }
    else {
        if (checkGetInvites[0] != inviteID2 && checkGetInvites[1] != inviteID2) {
            console.log("\x1b[31m✗\x1b[0m");
        }
        else {
            console.log("\x1b[32m✓\x1b[0m");
        }
    }
}
finally {
    await pool.query("DELETE FROM accounts WHERE username = $1 OR username = $2 OR username = $3", ["test_game_1", "test_game_2", "test_game_3"]);
}