const Product = require("../../models/Product");
module.exports = async (req, res) => {
    try {
        let { input } = req.body;
        // await Product.createIndexes({ name: "text" });
        // let products = await Product.find({ name: name.includes(input) });
        res.status(200).json({ status: true, data: products });
    } catch (error) {
        if (error) throw error;
        res.status(401).json({ status: false, error });
    }
};
