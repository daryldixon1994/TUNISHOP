const jwt = require("jsonwebtoken");
require("dotenv").config();
const secretKey = process.env.SECRET_KEY;
module.exports = async (req, res, next) => {
    try {
        let token = req.header("jwt");
        if (!token) {
            return res.status(401).json({
                status: false,
                message: "Access denied, you have to login",
            });
        }
        let verifiedToken = await jwt.verify(token, process.env.SECRET_KEY);
        next();
    } catch (error) {
        if (error) throw error;
        res.status(401).json({ status: false, error });
    }
};
