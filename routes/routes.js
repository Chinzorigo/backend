//improt express
import express from "express";

// import functions from controller
import {
    showProducts,
    showProductByID,
    createProduct,
    updateProduct,
    deleteProduct
} from "../controllers/products.js";

// init express router
const router = express.Router();

// get all products
router.get("/products", showProducts);

//get single product
router.get("")
