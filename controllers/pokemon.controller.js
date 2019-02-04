const Pokemon = require('../models/pokemon.model')

exports.test = (req, res) => {
    let pokemon = new Pokemon({
        name: req.body.name,
        url: req.body.url,
    })

    pokemon.save(function(err) {
        if (err) {
            return next(err)
        }
        res.send('Pokemon Created')
    })
}