const path = require("path");

const express = require("express");

const userController = require("../controllers/user");

const router = express.Router();
router.get("/products", userController.getProducts);
router.get("/", userController.getIndex);
router.get("/browse", userController.getBrowse);
router.post("/add-product", userController.postAddProduct);
router.get("/searchedProduct", userController.getSearchedProduct);
module.exports = router;
