async function p(url, token, body) {
    return await (
        await fetch(
            "http://localhost:41399/" + url, 
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + token
                },
                body: JSON.stringify(body)
            }
        )
    ).json()
}

const t1 = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50SUQiOiJkMDNkZmYxZi1mNTU1LTQ5ZDctOTQ1OC0yMDg4MTI5NDY5MzYiLCJpYXQiOjE3ODgzMzM5ODUsImV4cCI6MTc4ODMzNzU4NX0.7pFRnjbRPcqDRk03ahTXJ9PIPVjGkKo3J1rOvSDdhOY";
const t2 = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50SUQiOiIzNWU2ODFjYi01NjJiLTQxN2UtOTNhZC03ODIzY2RlNTVmYzgiLCJpYXQiOjE3ODgzMzQyMjgsImV4cCI6MTc4ODMzNzgyOH0.RZnUosHE765q4KyXOjMxkwVJSWzFv8fJO6QahVYkOr8";
const pid = "35e681cb-562b-417e-93ad-7823cde55fc8";

console.log(await p("api/game/accept", t2, {inviteID: 4}))