const express = require('express');
const router = express.Router();

const path = require('path');
const routeDir = require('../utils/path')

// /admin/add-products => GET
router.get('/add-product',(req, res, next) => {
    // res.send('<form action="/admin/product" method="POST"><input type="text" name="title"><button type="submit">Send</button></form>');
    // res.sendFile(path.join(__dirname,'../views/add-product.html'));
    res.sendFile(path.join(routeDir,'views', 'add-product.html'))
});

// /admin/products => POST
router.post('/add-product',(req,res,next) => {
    console.log(req.body);
    res.redirect('/');

});

module.exports = router;