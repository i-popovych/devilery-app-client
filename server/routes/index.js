const Router = require('express')
const shopRouters = require('./shop.routes')
const productRouters = require('./product.route')
const orderRoutes = require('./order.routes')
const router = new Router()

router.use('/shop', shopRouters)
router.use('/product', productRouters)
router.use('/order', orderRoutes)

module.exports = router