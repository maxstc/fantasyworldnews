export function checkParamsNotUndefined(paramNames) {
    return (req, res, next) => {
        try {
            for (const paramName of paramNames) {
                if (!req.body[paramName]) {
                    return res.status(400).json({
                        message: `Missing parameter: ${paramName}`
                    });
                }
            }
            next();
        }
        catch (error) {
            console.error();
            res.status(400).json({ message: "Parameter error" });
        }
    }
}