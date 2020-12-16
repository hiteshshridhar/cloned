const Product = require("../models/products");
const Search = require("../models/search");

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const product = new Product(title, imageUrl, price);
  product
    .save()
    .then(() => {
      res.redirect("/");
    })
    .catch(err => console.log(err));
};



exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render("/productList", {
      prods: products,
      pageTitle: "Products",
      path: "/products",
    });
  });
};

exports.getIndex = (req, res, next) => {
  Product.fetchAll()
    .then(([rows, fieldData]) => {
      res.render("shop/index", {
        prods: rows,
        pageTitle: "Shop",
        path: "/",
      });
    })
    .catch(err => console.log(err));
};

exports.getIndex = (req, res, next) => {
  res.render("shop/index", {
    path: "/",
  });
};

exports.getBrowse = (req, res, next) => {
  Product.fetchAll()
    .then(([rows, fieldData]) => {
      res.render("shop/browse", {
        prods: rows,
        pageTitle: "Shop",
        path: "/browse",
      });
    })
    .catch(err => console.log(err));
};


exports.getSearchedProduct = (req, res, next) => {
  Product.fetchAll()
    .then(([rows, fieldData]) => {
      res.render("shop/searchedProduct", {
        prod: rows,
        pageTitle: "Shop",
        path: "/searchedProduct",
      });
    })
    .catch(err => console.log(err));
};
