const Router = require('express')
const ProductController = require('../controllers/product.controller')
const {Product} = require("../models/models");
const router = new Router()

router.get('/', ProductController.getAllProducts)
router.post('/', ProductController.createProduct)
router.get('/:shopId', ProductController.getAllProductsByShop)

module.exports = router