const express = require("express");
const router = express.Router();
const upload = require("../../middlewares/uploads");
// REGISTER : /api/admin/register
router.post("/register", require("./register"));

//LOGIN : /api/admin/login
router.post("/login", require("./login"));

//ADD PRODUCT : /api/admin/addProduct
router.post("/addProduct", upload.array("photos", 10), require("./addProduct"));

//UPDATE PRODUCT: /api/admin/updateProduct/:id
router.post(
    "/updateProduct/:id",
    upload.array("photos", 10),
    require("./updateProduct")
);

// DELETE PRODUCT : /api/admin/deleteProduct
router.delete("/deleteProduct/:id", require("./deleteProduct"));

//GET PRODUCTS : /api/admin/products
router.get("/products", require("./getProducts"));

//GET PRODUCT : /api/admin/product/:id
router.get("/product/:id", require("./getProduct"));

//GET INSTOCK PRODUCTS : /api/admin/products/available
router.get("/products/available", require("./availableProducts"));

//GET USERS LIST : /api/admin/users
router.get("/users", require("./getUsers"));

//Ban User : /api/admin/banUser
router.put("/banUser/:id", require("./banUser"));

module.exports = router;
