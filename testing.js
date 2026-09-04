console.log("Testing /api/dashboard/players...");
console.log("");

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3R1c2VyMSIsImlhdCI6MTc4ODUwODk5OCwiZXhwIjoxNzg4NTEyNTk4fQ.ZtskZjeValjAunVCWKh99NHpQzIl28lxdmgWQ1P6-mM";


const response = await fetch(
    "http://localhost:41399/api/info/country",
    {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({
            gameID: "2",
            countryCode: "US"
        })
    }
);

console.log("Status:", response.status);

const body = await response.text();

console.log("Response:", body);