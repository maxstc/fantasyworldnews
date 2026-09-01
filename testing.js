async function test() {
    const fetchResult = await fetch("http://localhost:41399/api/account/signup", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + "this is where my token would go... IF I HAD ONE!!!"
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