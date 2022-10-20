const Product = require("../../models/Product");
const Achat = require("../../models/Achat");
module.exports = async (req, res) => {
    try {
        let { id, userId } = req.query;
        let selecteProduct = await Product.findById(id);
        let checkProduct = await Achat.find({ id });
        let { name, price, desc, img, inStock, color, createdAt } =
            selecteProduct;
        if (checkProduct) {
            return res
                .status(200)
                .json({ status: true, message: "Product already exists" });
        }
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
            id,
        });
        const result = await newAchat.save();
        res.status(200).json({ status: true, data: result });
    } catch (error) {
        if (error) throw error;
        res.status(401).json({ status: false, error });
    }
};
