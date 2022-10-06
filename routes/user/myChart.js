const Achat = require("../../models/Achat");
module.exports = async (req, res) => {
    try {
        let { id } = req.params;
        const userChart = await Achat.find({ userId: id });
        res.status(200).json({ status: true, data: userChart });
    } catch (error) {
        if (error) throw error;
        res.status(401).json({ status: false, error });
    }
};
