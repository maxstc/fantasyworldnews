export async function country(req, res) {
    const gameID = req.body.gameID;
    const countryCode = req.body.countryCode;
    
    console.log("Request body:", req.body);
    console.log("Game ID:", req.body.gameID);
    console.log("Country Code:", req.body.countryCode);

    return res.status(200).json({
        gameID: gameID,
        countryCode: countryCode
    });
}
