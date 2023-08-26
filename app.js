const path = require('path')
const express = require("express");
const bodyParser = require('body-parser')

const adminRoute = require('./routes/admin')
const shopRoute = require('./routes/shop');
const contactRoute = require('./routes/contact')

const app = express();

app.use(bodyParser.urlencoded({extended : true}))
app.use(express.static(path.join(__dirname, 'public')))

app.use('/admin', adminRoute)
// app.use(adminRoute)
app.use(shopRoute)  
app.use(contactRoute)

app.use((req,res,next) => {
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
})

app.listen(4000);
