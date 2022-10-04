const express = require("express");
const router = express.Router();

//GET PRODUCTS LIST: /api/user/products
router.get("/products", require("../admin/getProducts"));
//GET AVAILABLE PRODUCTS : /api/user/availableProducts
router.get("/availableProducts", require("../admin/availableProducts"));

// GET PRODUCTS BY NAME : /api/user/productsByName
router.get("/productsByName", require("./filterProductsByName"));
module.exports = router;
