const express = require('express');
const router = express.Router();

const path = require('path');
const adminController = require('../controllers/admin');


const products = [];

// /admin/add-products => GET
router.get('/add-product', adminController.getAddProduct);

// /admin/add-products => GET
router.get('/products', adminController.getProducts);

// /admin/products => POST
router.post('/add-product', adminController.postAddProducts);

module.exports = router;
