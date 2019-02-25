const express = require('express')
const router = express.Router()

const product_controller = require('../controllers/product.controller')

router.get('/all', product_controller.all)

router.get('/test', product_controller.test)

router.get('/name/:name', product_controller.find_name)

router.get('/country/:country', product_controller.find_country)

router.post('/create', product_controller.product_create)

router.put('/:id/update', product_controller.product_update)

router.delete('/:id/delete', product_controller.product_delete)

module.exports = router