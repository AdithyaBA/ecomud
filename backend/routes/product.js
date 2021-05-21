const express = require("express");
const router = express();
const {getProducts, newProduct} = require("../controllers/productController");

// Get 
router.get("/products", getProducts);
router.post("/product/new", newProduct);

module.exports = router;