const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//schema definition - ODM - Object Document Mapping

const ordersSchema = new Schema({
    id: Number,
    customerId: Number,
    productName: String,
    quantity: Number,
    unitPrice: Number,
    lineTotal: Number
})
const orders = mongoose.model('order',ordersSchema);
module.exports = orders;