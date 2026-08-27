//default port of web server if not specified in args
const DEFAULT_PORT = 41399;

//TODO move this to a "game rules" file
//max number of countries a player can have
const MAX_COUNTRIES = 10;

import express from "express";
const app = express();
app.use(express.json());

//Can pass port as first argument (or leave empty for default value)
let port = DEFAULT_PORT;
if (process.argv.length > 2) {
    port = parseInt(process.argv[2]);
}

import { router as accountRoutes } from "./routes/account/controller.js";

app.use("/api/account", accountRoutes);

app.get("/", (req, res) => {
    res.redirect("/index.html");
});

app.use(express.static("client/"));

app.listen(port, () => { console.log(`Server running on port ${port}`) });