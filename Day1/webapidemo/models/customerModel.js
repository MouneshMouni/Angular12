const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//schema definition - ODM - Object Document Mapping

const customerSchema = new Schema({
    id:{type:Number,required:true},
    name:String,
    city:String,
    orderTotal:Number,
    customerSince:{type:Date}

})
const customer = mongoose.model('customer',customerSchema);
module.exports = customer;