const ApiError = require('../error/ApiError')
const {Product} = require('../models/models')

class ProductController {
    async createProduct(req, res, next) {
        try {
            const product = await Product.create(req.body)
            return res.status(200).json(product)
        } catch (e) {
            return next(e)
        }
    }
    async getAllProducts(req, res, next) {
        try {
            const products = await Product.findAll()
            return res.status(200).json(products)
        } catch (e) {
            return next(e)
        }
    }

    async getAllProductsByShop(req, res, next) {
        try {
            const {shopId} = req.params
            if (!shopId) {
                return next(ApiError.badRequest('shopId must be'))
            }
            const products = await Product.findAll({ where: {shopId} })
            return res.status(200).json(products)
        } catch (e) {
            return next(e)
        }
    }
}

module.exports = new ProductController()