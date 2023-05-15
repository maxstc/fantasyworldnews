async function post(data) {
    const result = await fetch("http://" + window.location.host, {
        method: "POST",
        body: data,
        headers: {
            "Content-Type": "application/json"
        }
    });
    return result;
}

export default post;