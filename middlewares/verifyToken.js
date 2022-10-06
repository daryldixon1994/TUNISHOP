const jwt = require("jsonwebtoken");
require("dotenv").config();
const secretKey = process.env.SECRET_KEY;
module.exports = async (req, res, next) => {
    const token = req.header("jwt");
    jwt.verify(token, secretKey, (err, result) => {
        if (err) {
            return res.status(400).json({
                status: false,
                message: "Please Login",
                login: false,
            });
        }
        next();
    });
};
