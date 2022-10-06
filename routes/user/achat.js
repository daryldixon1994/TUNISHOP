const Product = require("../../models/Product");
const Achat = require("../../models/Achat");
module.exports = async (req, res) => {
    try {
        let { id, userId } = req.query;
        let selecteProduct = await Product.findById(id);
        let { name, price, desc, img, inStock, color, createdAt } =
            selecteProduct;

        const newAchat = await new Achat({
            userId,
            product: {
                name,
                price,
                desc,
                inStock,
                img,
                color,
                createdAt,
            },
        });
        const result = await newAchat.save();
        res.status(200).json({ status: true, data: result });
    } catch (error) {
        if (error) throw error;
        res.status(401).json({ status: false, error });
    }
};
