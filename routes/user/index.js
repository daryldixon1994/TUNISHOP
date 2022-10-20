const express = require("express");
const router = express.Router();
const verify = require("../../middlewares/verifyToken");
//GET PRODUCTS LIST: /api/user/products
router.get("/products", require("../admin/getProducts"));

//GET AVAILABLE PRODUCTS : /api/user/availableProducts
router.get("/availableProducts", require("../admin/availableProducts"));

// GET PRODUCTS BY MAX AND MI PRICE : /api/user/price/filter
router.get("/price/filter/:min", require("./filterPrice"));

//USER BUY A PRODUCT : /api/user/shop
router.post("/shop", verify, require("./achat"));

//USER GET CHART: /api/user/myChart
router.get("/myChart/:id", require("./myChart"));
module.exports = router;
