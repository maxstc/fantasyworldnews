async function test() {
    const fetchResult = await fetch("http://localhost:41399/api/account/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + "this is where my token would go... IF I HAD ONE!!!"
        },
        body: JSON.stringify({
            username: "waxy",
            password: "fart1234567890"
        })
    })
    const jsonResult = await fetchResult.json();
    console.log(jsonResult);
}

test();