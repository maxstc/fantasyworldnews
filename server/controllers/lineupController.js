const db = require("../db");

exports.lineup = async (req, res) => {
    db.collection("teams").updateOne({name: req.body.team}, {$set: {lineup: req.body.lineup}});
    res.json({success: true, message: "Success"});
};