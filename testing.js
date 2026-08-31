fetch("http://localhost:41399/api/account/signup", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    username: "waxy",
    password: "fart1234567890",
    email: "ajkdh.macks@gmail.com"
  })
})
  .then(response => response.json());