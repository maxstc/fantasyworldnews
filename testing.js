async function test() {
    const fetchResult = await fetch("http://localhost:41399/api/game/invite", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50SUQiOiJkMDNkZmYxZi1mNTU1LTQ5ZDctOTQ1OC0yMDg4MTI5NDY5MzYiLCJpYXQiOjE3ODgzMjY1NDEsImV4cCI6MTc4ODMzMDE0MX0.nSrHKfunxlovf7okUMdU5mjT79LWrbnhunpCGxYvzG4"
        },
        body: JSON.stringify({
            gameID: 1,
            recipientAccountID: "d03dff1f-f555-49d7-9458-208812946936",
            username: "fartlord",
            password: "fart1234567890"
        })
    })
    const jsonResult = await fetchResult.json();
    console.log(jsonResult);
}

test();