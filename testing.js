async function test() {
    const fetchResult = await fetch("http://localhost:41399/api/dashboard/trades", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImZhcnRsb3JkIiwiaWF0IjoxNzg4MzE5MDg4LCJleHAiOjE3ODgzMjI2ODh9.E20Pgpnny7Ndzsb2cjBi1YL5RLQLZhxYoHya754heV4"
        },
        body: JSON.stringify({
            username: "fartlord",
            password: "fart1234567890",
            email: "fartlord@email.net"
        })
    })
    const jsonResult = await fetchResult.json();
    console.log(jsonResult);
}

test();