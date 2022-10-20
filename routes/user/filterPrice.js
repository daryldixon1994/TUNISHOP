const Product = require("../../models/Product");
module.exports = async (req, res) => {
    try {
        let { minPrice, maxPrice } = req.body;
        console.log(req.body);
        console.log(req.params);
        if (minPrice && !maxPrice) {
            const products = await Product.find({
                price: { $gt: minPrice },
            });
            return res.status(200).json({ status: true, data: products });
        }
        if (maxPrice && !minPrice) {
            const products = await Product.find({
                price: { $lt: maxPrice },
            });
            return res.status(200).json({ status: true, data: products });
        }
        if (maxPrice && minPrice) {
            const products = await Product.find({
                price: { $lt: maxPrice, $gt: minPrice },
            });
            return res.status(200).json({ status: true, data: products });
        }
    } catch (error) {
        if (error) throw error;
        res.status(401).json({ status: false, error });
    }
};
