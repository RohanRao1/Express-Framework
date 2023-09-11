const Product = require("../models/product");
const Cart = require("../models/cart");

exports.getProducts = (req, res, next) => {
  Product.findAll()
    .then((products) => {
      res.render("shop/product-list", {
        prods: products,
        pageTitle: "All Products",
        path: "/products",
      });
    })
    .catch((err) => console.log(err));
};

exports.getProduct = (req, res) => {
  const prodId = req.params.productId;
  // Product.findAll({ where: { id: prodId } })
  //   .then((data) => {
  //     // console.log(data)
  //     res.render("shop/product-detail", {
  //       product: data[0],
  //       pageTitle: data[0].title,
  //       path: "/products",
  //     });
  //   })
  //   .catch((err) => console.log(err));
  Product.findByPk(prodId)
    .then((data) => {
      res.render("shop/product-detail", {
        product: data,
        pageTitle: data.title,
        path: "/products",
      });
    })
    .catch((err) => console.log(err));
};

exports.getIndex = (req, res, next) => {
  Product.findAll()
    .then((products) => {
      res.render("shop/index", {
        prods: products,
        pageTitle: "Shop",
        path: "/",
      });
    })
    .catch((err) => console.log(err));
};

exports.getCart = (req, res, next) => {
  Cart.getCart((cart) => {
    Product.fetchAll((products) => {
      // console.log('products =', products)
      const cartProducts = [];
      for (product of products) {
        // console.log("product =", product);
        const cartProductdata = cart.products.find(
          (prod) => prod.id === product.id
        );
        // console.log('cart data = ', product , cartProductdata)
        if (cartProductdata) {
          cartProducts.push({ productData: product, qty: cartProductdata.qty });
        }
      }
      res.render("shop/cart", {
        path: "/cart",
        pageTitle: "Your Cart",
        products: cartProducts,
      });
    });
  });
};

exports.postCart = (req, res, next) => {
  const prodId = req.body.productId;
  // console.log('post cart ', prodId)
  Product.findById(prodId, (product) => {
    // console.log('post cart ',prodId, product)
    Cart.addproduct(prodId, product.price);
    res.redirect("/cart");
  });
};

exports.postCartDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  console.log("delete cart ", prodId);
  Product.findById(prodId, (product) => {
    // console.log('pro', product)
    Cart.deleteProduct(prodId, product.price);
    res.redirect("/cart");
  });
};

exports.getOrders = (req, res, next) => {
  res.render("shop/orders", {
    path: "/orders",
    pageTitle: "Your Orders",
  });
};

exports.getCheckout = (req, res, next) => {
  res.render("shop/checkout", {
    path: "/checkout",
    pageTitle: "Checkout",
  });
};
