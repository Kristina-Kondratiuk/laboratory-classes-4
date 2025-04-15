const Product = require("../models/Product");
const { STATUS_CODE } = require("../constants/statusCode");

const getProductsView = (_req, res) => {
  const products = Product.getAll();
  res.render("products", { products });
};

const getAddProductView = (_req, res) => {
  res.render("add-product");
};

const addNewProduct = (req, res) => {
  const { name, description } = req.body;
  const newProduct = new Product(name, description);
  Product.add(newProduct);
  res.redirect("/products/new");
};

const getNewProductView = (_req, res) => {
    const product = Product.getLast();
    res.render("new-product", { product });
  };
  
  const getProductView = (req, res) => {
    const product = Product.findByName(req.params.name);
    res.render("product", { product });
  };
  
  const deleteProduct = (req, res) => {
    const name = req.params.name;
    Product.deleteByName(name);
    res.status(STATUS_CODE.OK).json({ success: true });
  };
  
  module.exports = {
    getProductsView,
    getAddProductView,
    addNewProduct,
    getNewProductView,
    getProductView,
    deleteProduct,
  };