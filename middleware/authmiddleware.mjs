import jwt from "jsonwebtoken";

export default function authentication  (req, res, next) {
    const token = req.cookies?.token; 

    if (!token) {
        console.log("No token found");
        return res.status(401).send("No token found");
    }

    try {
        const valid = jwt.verify(token, "secretKey");
        if (valid) {
            req.user = valid; 
            next(); 
        }
    } catch (err) {
        console.error("Error verifying token:", err);
        return res.status(403).send("Invalid token");
    }
};
