// checks that the signature of the authentication token in the header of the form Authentication: Bearer <token> is valid
// sets req.user to the decoded contents of the token

import jwt from "jsonwebtoken";

export function checkAuth(req, res, next) {
    if (req.get("Authorization"));
    if (!authHeader?.startsWith('Bearer ')) {
        return res.status(401).json({message: "Missing or malformed authorization header"});
    }
    const token = authHeader.slice(7);
    if (!token) {
        return res.status(401).json({message: "Missing or malformed authorization header"});
    }
    try {
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decodedToken;
        next();
    }
    catch (error) {
        return res.status(401).json({message: "Invalid token"});
    }
}