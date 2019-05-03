const express = require('express');
const router = express.Router();

const path = require('path');
const productsController = require('../controllers/products')

const products = [];

// /admin/add-products => GET
router.get('/add-product', productsController.getAddProduct);

// /admin/products => POST
router.post('/add-product', productsController.postAddProducts);

module.exports = router;
