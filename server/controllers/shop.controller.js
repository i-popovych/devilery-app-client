const ApiError = require('../error/ApiError')
const {Shop} = require('../models/models')

class ShopController {
    async getShops(req, res, next) {
        try {
            const shops = await Shop.findAll()
            return res.status(200).json(shops)
        } catch (e) {
            return next(e)
        }
    }

    async createShop(req, res, next) {
        try {
            const {title} = req.body
            if (!title) {
                return next(ApiError.badRequest('name is not specified'))
            }
            const shop = await Shop.create({title})
            return res.status(200).json(shop)
        } catch (e) {
            return next(e)
        }
    }
}

module.exports = new ShopController()