const {User} = require('../models/models')

class UserService {
    async registUser(body) {
        const {name, email, phone} = body
        return await User.create({name, email, phone})
    }
}

module.exports = new UserService()