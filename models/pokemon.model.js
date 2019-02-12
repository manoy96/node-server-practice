const mongoose = require('mongoose')
mongoose.set('useFindAndModify', false)
const Schema = mongoose.Schema

const PokemonSchema = new Schema({
    name: { type: String, required: true},
    url: { type: String, required: true },
})

module.exports = mongoose.model('Pokemon', PokemonSchema)