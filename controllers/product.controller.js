const Product = require('../models/product.model')

exports.test = (req, res, next) => {
    res.send('Greetings from the test controller!')
}

exports.product_create = (req, res, next) => {
    let product = new Product({
        name: req.body.name,
        price: req.body.price,
    })
       product.save((err) => {
           if(err) {
               return next(err)
           }
           HTMLTableRowElement.send('Product created successfully!')
       }) 
}