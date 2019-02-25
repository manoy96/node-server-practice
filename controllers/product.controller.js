// const Product = require('../models/product.model')

// exports.test = (req, res, next) => {
//     res.send('Greetings from the test controller!')
// }

// exports.product_create = (req, res, next) => {
//     let product = new Product({
//         name: req.body.name,
//         price: req.body.price,
//     })
    
//     product.save((err) => {
//         if (err) {
//             return next(err)
//         }
//         res.send('Product created successfully!')
//     }) 
// }

// // exports.pokemon_create = (req, res, next) => {
// //     let pokemon = new pokemon({
// //         name: req.body.name,
// //         url: req.body.url,
// //     })

// //     pokemon.save(function(err) {
// //         if (err) {
// //             return next(err)
// //         }
// //         res.send('Pokemon created!')
// //     })
// // }

    
// exports.product_update = (req, res, next) => {
//     Product.findByIdAndUpdate(
//         req.params.id, 
//         { $set: req.body},
//         (err, product) => {
//         if (err) return next(err)
//         res.send('Product updated')
//     },
//     )
// }

// exports.product_delete = (req, res, next) => {
//     Product.findByIdAndRemove(req.params.id, (err) => {
//         if (err) return next(err)
//         res.send('Deleted Successfully')
//     })
// }


















const Product = require('../models/product.model')
const Pokemon = require('../models/pokemon.model')

// simple version with no validation or sanitation
exports.all = (req, res) => {
  Product.find({})
  .then( (allProduct) => res.json(allProduct))
}

exports.test = (req, res) => {
  res.send('Greetings from the test controller!')
}

exports.find_name = (req, res, next) => {
  const rocketName = req.params.name;
  Product.find({
      name: rocketName
    })
    .then(result => {
      res.send(result)
    })
}

exports.find_country = (req, res, next) => {
  const rocketLocation = req.params.country;
  Product.find({
      country: rocketLocation
    })
    .then(result => {
      res.send(result)
    })
}

exports.product_create = (req, res, next) => {
  let product = new Product({
    name: req.body.name,
    price: req.body.price,
    country: req.body.country,
    company: req.body.company
  })

  product.save(function(err) {
    if (err) {
      return next(err)
    }
    res.send('Product created successfully')
  })
}

exports.product_update = (req, res, next) => {
  Product.findByIdAndUpdate(
    req.params.id,
    { $set: req.body },
    (err, product) => {
      if (err) return next(err)
      res.send('Product updated.')
    },
  )
}

exports.product_delete = (req, res, next) => {
    Product.findByIdAndRemove(req.params.id, (err) => {
        if (err) return next(err)
        res.send('Deleted successfully')
    })
}