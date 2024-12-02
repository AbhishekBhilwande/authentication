const checkauth = async (req, res, next) => {
    const allowedRoles = ["admin"]; 
    try {
        if (!req.user?.role) {
            console.log("User role is not defined:", req.user);
            return res.status(403).send("User role is not defined");
        }

        const result = allowedRoles.includes(req.user.role); 
        if (result) {
            console.log("User is admin, access granted");
            return next();
        }

        console.log("User is not authorized");
        return res.status(403).send("User is not authorized");
    } catch (error) {
        console.error("Authorization check failed:", error);
        return res.status(500).send("An error occurred during authorization");
    }
};
export default checkauth;
