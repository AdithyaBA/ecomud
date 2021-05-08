const express = require("express");
const router = express();
const {getProducts} = require("../controllers/productController");

// Get 
router.get("/products", getProducts)

module.exports = router;