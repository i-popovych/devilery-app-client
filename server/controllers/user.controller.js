// const ApiError = require('../error/ApiError')
// const {User} = require('../models/models')
// const {where} = require("sequelize");
//
// class UserController {
//     async registUser(req, res, next) {
//         try {
//             const {name, email, phone} = req.body
//             const data = await User.create({name, email, phone})
//             return res(200).json(data)
//         } catch (e) {
//             throw new Error(e)
//         }
//
//     }
// }
//
// module.exports = new UserController()