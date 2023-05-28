const Router = require('express')
const OrderController = require('../controllers/order.controller')
const router = new Router()

router.post('/', OrderController.createOrder)

module.exports = router