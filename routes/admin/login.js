const User = require("../../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();
module.exports = async (req, res) => {
    try {
        let { email, password } = req.body;
        let checkUser = await User.findOne({ email });
        if (!checkUser) {
            return res.status(401).json({
                status: false,
                message: "Wrong email or password, please check again.",
            });
        }
        const testPass = await bcrypt.compare(password, checkUser.password);
        if (!testPass) {
            return res.status(401).json({
                status: false,
                message: "Wrong email or password, please check again.",
            });
        }
        let secretKey = process.env.SECRET_KEY;
        const token = await jwt.sign({ checkUser }, secretKey, {
            expiresIn: "1 day",
        });
        res.status(200).json({
            status: true,
            message: "Login successfully",
            data: {
                id: checkUser._id,
                token,
                isAdmin: checkUser.isAdmin,
                isUser: checkUser.isUser,
                isBanned: checkUser.isBanned,
            },
        });
    } catch (error) {
        if (error) throw error;
        res.status(400).json({ status: false, error });
    }
};
