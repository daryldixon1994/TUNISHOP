const Product = require("../../models/Product");
module.exports = async (req, res) => {
    try {
        let products = await Product.find({ inStock: "true" });
        res.status(200).json({ status: true, data: products });
    } catch (error) {
        if (error) throw error;
        res.status(400).json({ status: false, error });
    }
};
