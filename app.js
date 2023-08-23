const express = require("express");
const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.urlencoded({extended : true}))

app.use("/add-product", (req, res, next) => {
//   console.log("in the product");
  res.send(
    "<form action='/product' method='POST'><input type='text' name ='title'><input type='number' name ='size'><button type='submit'>Add Product</button> </form>"
  );
});

app.post('/product', (req, res, next) => {
    console.log(req.body)
    res.redirect('/')
})

app.use("/", (req, res, next) => {
//   console.log("in the middleware");
  res.send("<h1>Hello Express world </h1>");
});

app.listen(4000);
