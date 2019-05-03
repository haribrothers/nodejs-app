const Product = require('../models/products');

exports.getAddProduct = (req, res, next) => {
    res.render('admin/add-products', 
        {pageTitle: 'Add Product', 
        path: '/admin/add-product'
    });
};

exports.postAddProducts = (req,res,next) => {
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const price = req.body.price;
    const description = req.body.description;

    const product = new Product(title, imageUrl,price,description);
    product.save();
    // products.push({title: req.body.title})
    res.redirect('/');

};

exports.getProducts = (req, res, next) => {
  const products = Product.fetchAll((products) => {
      res.render('admin/products', 
          {
              prods: products, 
              pageTitle: 'Admin Products', 
              path: '/admin/products'
          }
      );
  }); 
}