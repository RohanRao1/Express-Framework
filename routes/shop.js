const path = require('path')
const express = require('express')

const router = express.Router()
const rootDir = require('../util/path')


// router.get("/shop", (req, res, next) => {
//   //   console.log("in the middleware");
//   res.send("<h1>Hello Express world </h1>");
// });

router.get("/", (req, res, next) => {
  //   console.log("in the middleware");
  res.sendFile(path.join(rootDir, 'views', 'shop.html'))
});

module.exports = router