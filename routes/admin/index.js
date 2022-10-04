const express = require("express");
const router = express.Router();
// REGISTER : /api/admin/register
router.post("/register", require("./register"));

//LOGIN : /api/admin/login
router.post("/login", require("./login"));

//ADD PRODUCT : /api/admin/addProduct
router.post("/addProduct", require("./addProduct"));

//UPDATE PRODUCT: /api/admin/updateProduct
router.put("/updateProduct/:id", require("./updateProduct"));

// DELETE PRODUCT : /api/admin/deleteProduct
router.delete("/deleteProduct/:id", require("./deleteProduct"));

//GET PRODUCTS : /api/admin/getProducts
router.get("/products", require("./getProducts"));

//GET INSTOCK PRODUCTS : /api/admin/products/available
router.get("/products/available", require("./availableProducts"));

//GET USERS LIST
router.get("/users", require("./getUsers"))

//Ban User : /api/admin/banUser
router.put("/banUser/:id", require("./banUser"));

module.exports = router;
