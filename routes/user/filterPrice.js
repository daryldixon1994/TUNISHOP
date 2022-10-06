const Product = require("../../models/Product");
module.exports = async (req, res) => {
    try {
        let { minPrice, maxPrice } = req.body;
        const products = await Product.find({
            price: { $lt: maxPrice, $gt: minPrice },
        });
        res.status(200).json({ status: true, data: products });
    } catch (error) {
        if (error) throw error;
        res.status(401).json({ status: false, error });
    }
};
