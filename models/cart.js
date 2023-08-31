const fs = require('fs')
const path = require('path')

const p = path.join(
  path.dirname(process.mainModule.filename),
  "data",
  "cart.json"
);


module.exports = class Cart {
    static addproduct(id, productPrice) {
        // fetch prev cart 
        fs.readFile(p , (err , data) => {
            let cart = {products : [], totalprice : 0}
            if (!err) {
                cart = JSON.parse(data)
            }
            // analyze cart => find existing prod
            const existingProductIndex = cart.products.findIndex(prod => prod.id == id)
            let existingProduct = cart.products[existingProductIndex]
            let updatedProduct ;
             // add new prod / increase qty
            if (existingProduct) {
                updatedProduct = {...existingProduct}
                updatedProduct.qty = updatedProduct.qty + 1
                cart.products = [...cart.products]
                cart.products[existingProductIndex] = updatedProduct
            } else {
                updatedProduct = {id : id, qty : 1}
                cart.products = [...cart.products , updatedProduct]
            }
            cart.totalprice = +cart.totalprice + +productPrice
            fs.writeFile(p, JSON.stringify(cart), err => {
                console.log(err)
            })
        })
       
    }



}