const products = []
const Product = require('../models/products');

exports.getAddProduct = (req, res, next) => {
    res.render('add-products', 
        {pageTitle: 'Add Product', 
        path: '/admin/add-product'
    });
};

exports.postAddProducts = (req,res,next) => {
    console.log(req.body);
    const product = new Product(req.body.title);
    product.save();
    // products.push({title: req.body.title})
    res.redirect('/');

};

exports.getProducts = (req, res, next) => {
    const products = Product.fetchAll((products) => {
        res.render('shop', 
            {
                prods: products, 
                pageTitle: 'Shop', 
                path: '/'
            }
        );
    });
    
}