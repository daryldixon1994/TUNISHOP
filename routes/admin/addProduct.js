const Product = require("../../models/Product");
const cloudinary = require("../../middlewares/cloudinary");
const fs = require("fs");

module.exports = async (req, res) => {
    try {
        let { name, price, desc, inStock, color } = req.body;
        const uploader = async (path) =>
            await cloudinary.uploads(path, "uploads");
        if (req.files.length !== 0) {
            const urls = [];
            const files = req.files;
            for (const file of files) {
                const { path } = file;
                const newPath = await uploader(path);
                urls.push(newPath.url);
                fs.unlinkSync(path);
            }
            const newProduct = new Product({
                name,
                price,
                desc,
                img: urls,
                inStock,
                color,
            });
            await newProduct.save();
            res.status(200).json({
                status: true,
                message: "Product was added successfully",
            });
        } else {
            res.status(405).json({
                status: false,
                message: "error",
            });
        }
    } catch (error) {
        if (error) throw error;
        res.status(400).json({ status: false, error });
    }
};
