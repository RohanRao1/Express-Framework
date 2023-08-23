

const express = require('express');

const app = express()

app.use((req, res, next) => {
    console.log('in the middleware')
    next() // allows request to continue
})

app.use((req, res, next) => {
  console.log("in the middleware2");
  res.send('<h1>Hello Express world </h1>')
});

app.listen(4000)