const Product = require('../models/products');

exports.getProducts = (req, res, next) => {
    const products = Product.fetchAll((products) => {
        res.render('shop/product-list', 
            {
                prods: products, 
                pageTitle: 'All Products', 
                path: '/products'
            }
        );
    }); 
}

exports.getProduct = (req, res, next) => {
    const prodID = req.params.productId;
    const products = Product.findById(prodID, (product) => {
        res.render('shop/product-list', 
            {
                prods: product, 
                pageTitle: 'Detail Page', 
                path: '/products'
            }
        );
    }); 
}

exports.getIndex = (req, res, next) => {
    const products = Product.fetchAll((products) => {
        res.render('shop/index', 
            {
                prods: products,  
                pageTitle: 'Shop', 
                path: '/'
            }
        );
    }); 
};

exports.getCart = (req, res, next) => {
    const products = Product.fetchAll((products) => {
        res.render('shop/cart', 
            {
                prods: products, 
                pageTitle: 'Cart', 
                path: '/cart'
            }
        );
    }); 
};

exports.getOrders = (req, res, next) => {
    const products = Product.fetchAll((products) => {
        res.render('shop/orders', 
            {
                prods: products, 
                pageTitle: 'Orders', 
                path: '/orders'
            }
        );
    }); 
};

exports.getCheckout = (req, res, next) => {
    const products = Product.fetchAll((products) => {
        res.render('shop/checkout', 
            {
                prods: products, 
                pageTitle: 'Checkout', 
                path: '/checkout'
            }
        );
    }); 
};