const express = require("express");

const { MENU_LINKS } = require("../constants/navigation");
const { STATUS_CODE } = require("../constants/statusCode");
const productsController = require("../controllers/productsController");

const router = express.Router();

router.get("/", (req, res) => {
  res.locals.headTitle = "Shop - Products";
  res.locals.path = "/";
  res.locals.menuLinks = MENU_LINKS;
  res.locals.activeLinkPath = "/products";

  productsController.getProductsView(req, res);
});

router.get("/add", (req, res) => {
  res.locals.headTitle = "Shop - Add product";
  res.locals.path = "/add";
  res.locals.menuLinks = MENU_LINKS;
  res.locals.activeLinkPath = "/products/add";

  productsController.getAddProductView(req, res);
});

router.post("/add", productsController.addNewProduct);

router.get("/new", (req, res) => {
  res.locals.headTitle = "Shop - New product";
  res.locals.path = "/new";
  res.locals.menuLinks = MENU_LINKS;
  res.locals.activeLinkPath = "/products/new";

  productsController.getNewProductView(req, res);
});

router.get("/:name", (req, res) => {
  res.locals.headTitle = `Shop - ${req.params.name}`;
  res.locals.menuLinks = MENU_LINKS;
  res.locals.path = `/products/${req.params.name}`;
  res.locals.activeLinkPath = "";

  productsController.getProductView(req, res);
});

router.delete("/:name", productsController.deleteProduct);

module.exports = router;