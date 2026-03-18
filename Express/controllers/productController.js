const products = require('../modules/productModules')

exports.getProducts = (req, res) => {

    res.json(products);
};

exports.getProductById = (req, res) => {
    const id = req.params.id;

}

exports.addProducts = (req, res) => {
    const products = req.body;
    console.log("products:", products);
    res.json(
        {message: "Product added successfully",
        products: products
    });
};