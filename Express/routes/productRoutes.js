const express = require('express')
const router = express.Router()
const productController = require('../controllers/productController')


router
    .route("/products")
    .get(productController.getProducts)
    .post(productController.addProducts);

router
    .route("/products/:id")
    .get(productController.getProductById)
    .put(productController.updateProduct)
    .delete(productController.deleteProduct);

module.exports = router