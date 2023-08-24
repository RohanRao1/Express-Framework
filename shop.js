const express = require('express')

const router = express.Router()

router.get("/shop", (req, res, next) => {
  //   console.log("in the middleware");
  res.send("<h1>Hello Express world </h1>");
});

router.get("/", (req, res, next) => {
  //   console.log("in the middleware");
  res.send("<h1>Hello Express world </h1>");
});

module.exports = router