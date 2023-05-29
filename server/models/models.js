const sequelize = require("../db")
const {DataTypes} = require("sequelize")

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, require: true, notNull: true},
    email: {type: DataTypes.STRING, unique: true, require: true, notNull: true},
    address: {type: DataTypes.STRING, require: true, notNull: true},
    phone: {type: DataTypes.STRING, require: true, notNull: true}
})

const Shop = sequelize.define('shop', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, unique: true, require: true, notNull: true},
})

const Product = sequelize.define('product', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, require: true, notNull: true},
    price: {type: DataTypes.INTEGER, require: true, notNull: true},
    imgUrl: {type: DataTypes.STRING, require: true, notNull: true}
})


const Order = sequelize.define('order', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    location: {type: DataTypes.STRING, require: true}
})

const OrderProduct = sequelize.define('order_product', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    count: {type: DataTypes.INTEGER, notNull: true}
})


Order.belongsToMany(Product, {through: OrderProduct})
Product.belongsToMany(Order, {through: OrderProduct})

Shop.hasMany(Product)
Product.belongsTo(Shop)

User.hasMany(Order)
Order.belongsTo(User)

module.exports = {
    Shop, Product, User, Order, OrderProduct
}
