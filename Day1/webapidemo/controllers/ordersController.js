const OrdersModel = require('../models/ordersModel');

module.exports = {
    async getAllOrders(ctx){
        const users = await OrdersModel.find({});
        ctx.body = users;
    }
}