// const mongoose = require('mongoose')
// mongoose.set('useFindAndModify', false)
// const Schema = mongoose.Schema

// const ProductSchema = new Schema({
//     name: {type: String, required: true, max: 100},
//     price: {type: Number, required: true},
// })

// module.exports = mongoose.model('Product', ProductSchema)








const mongoose = require('mongoose')
mongoose.set('useFindAndModify', false)
const Schema = mongoose.Schema

const ProductSchema = new Schema({
    name: {
        type: String,
        required: true,
        max: 100,
    },
    country: {
        type: String,
        required: true,
        max: 100,
    },
    price: {
        type: Number,
        required: true,
    },
    company: {
        type: String,
        required: true,
        max: 100,
    }
    
})

module.exports = mongoose.model('Product', ProductSchema)
// exporting the model named 'Product' for use by our other files