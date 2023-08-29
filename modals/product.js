// const products = []
const fs = require("fs");
const path = require("path");
const root = require("../util/path");
const p = path.join(root, "data", "products.json");


const getProductsFromFile = (cb) => {
  fs.readFile(p, (error, data) => {
    if (error) {
      return cb([]);
    } else {
      cb(JSON.parse(data));
    }
   
  });
};

module.exports = class Product {
  constructor(title) {
    this.title = title;
  }

  save() {
    getProductsFromFile((products) => {
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  }

  static fetchAll(cb) {
    getProductsFromFile(cb);
  }
};
