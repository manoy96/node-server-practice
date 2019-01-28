const mongoose = require('mongoose')
const schema = mongoose.schema

const ProductSchema = new schema({
    name: (type: String, required: true, max: 100),
    price: (type: Number, required: true),
}}

module.exports = mongoose.model('Product', ProductSchema)