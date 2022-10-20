const User = require("../../models/User");
module.exports = async (req, res) => {
    try {
        const users = await User.find({ isUser: true, isAdmin: false }).select({
            password: 0,
            email: 0,
        });
        res.status(200).json({ status: true, data: users });
    } catch (error) {
        if (error) throw error;
        res.status(401).json({ status: false, error });
    }
};
