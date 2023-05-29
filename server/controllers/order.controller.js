const ApiError = require('../error/ApiError')
const {Order, OrderProduct, User} = require('../models/models')
const {where} = require("sequelize");
const UserService = require('../services/user.service')

class OrderController {
    async createOrder(req, res, next) {
        try {
            const {name, email, phone, address, foodArr} = req.body

            let user = await User.findOne({where: {email}})
            if (!user)
                user = await UserService.registUser({name, email, phone})

            const order = await Order.create({userId: user.id, location: address})

            const ordersCreatePromise = []
            foodArr.forEach(({productId, count}) => {
                ordersCreatePromise.push(OrderProduct.create({productId, orderId: order.id, count}))
            })
            await Promise.all(ordersCreatePromise)

            return res.status(200).json({message: 'order was successfully created'})
        } catch (e) {
            next( new Error(e) )
        }
    }

    // async showUserOrders(req, res, next) {
    //     try {
    //         const {userId} = req.body
    //
    //     } catch (e) {
    //
    //     }
    // }
}

module.exports = new OrderController()