const Product = require("../../models/Product");
module.exports = async (req, res) => {
    try {
        let { id } = req.params;
        await Product.findByIdAndUpdate(
            id,
            {
                $set: { ...req.body },
            },
            { new: true }
        );
        res.status(200).json({
            status: true,
            message: "Product was updated successfully",
        });
    } catch (error) {
        if (error) throw error;
        console.log(error);
    }
};
