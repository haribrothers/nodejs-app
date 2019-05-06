const express = require('express');
const router = express.Router();

const shopController = require('../controllers/shop')

const adminData = require('./admin')

router.get('/',shopController.getIndex);

router.get('/products', shopController.getProducts);

// /products/1234
router.get('/products/:productId', shopController.getProducts);

router.get('/cart', shopController.getCart);

router.get('/orders', shopController.getOrders);

router.get('/checkout', shopController.getCheckout);

module.exports = router;