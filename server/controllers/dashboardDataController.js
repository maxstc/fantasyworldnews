const db = require("../db");

exports.dashboardData = async (req, res) => {
    res.set("Access-Control-Allow-Origin", "http://localhost:3000");
    res.send(JSON.stringify({
        teams: await db.collection("teams").find().toArray(),
        //trades: await db.collection("trades").find({$or: [{targetTeam: req.body.teamName}, {proposerTeam: req.body.teamName}]}).toArray(),
        trades: await db.collection("trades").find().toArray(),
        countries: await db.collection("countries").find().toArray(),
        headlines: await db.collection("headlines").find().toArray()
    }));
};