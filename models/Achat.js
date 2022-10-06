const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const achatSchema = new Schema(
    {
        userId: {
            type: Schema.Types.ObjectId,
            required: true,
        },
        product: {
            name: {
                type: String,
                required: true,
            },
            price: {
                type: Number,
                required: true,
            },
            desc: {
                type: String,
                required: true,
            },
            img: {
                type: [String],
                required: true,
            },
            inStock: {
                type: Boolean,
                required: true,
            },
            color: {
                type: String,
                required: true,
            },
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Achat", achatSchema);
