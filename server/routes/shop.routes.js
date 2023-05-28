const Router = require('express')
const ShopController = require('../controllers/shop.controller')
const router = new Router()

router.get('/test', (req, res) => {
    res.status(200).json({message: 'safds'})
})

router.get('/', ShopController.getShops)
router.post('/', ShopController.createShop)

module.exports = router