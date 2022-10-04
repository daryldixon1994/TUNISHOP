const Product = require("../../models/Product");
module.exports = async (req, res) => {
    try {
        let { name, price, desc, img, inStock, color } = req.body;
        const newProduct = new Product({
            name,
            price,
            desc,
            img,
            inStock,
            color,
        });
        await newProduct.save();
        res.status(200).json({
            status: true,
            message: "Product was added successfully",
        });
    } catch (error) {
        if (error) throw error;
        res.status(400).json({ status: false, error });
    }
};
