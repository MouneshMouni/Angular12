const Customer = require('../models/customerModel');

module.exports = {
    async getAllCustomers(ctx){
        const customers = await Customer.find({});
        ctx.body = customers;
    },
    async searchCustomers(ctx) {
        const {searchText} = ctx.params;
        const customers = await Customer.find({name: new RegExp(searchText, "i")});
        ctx.body = customers;
    }
}